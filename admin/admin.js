// Admin Portal JavaScript
const ADMIN_PASSWORD = 'badhon2024';
let currentTab = 'messages';

// Authentication
function login() {
    const password = document.getElementById('password').value;
    if (password === ADMIN_PASSWORD) {
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        loadData();
    } else {
        alert('Invalid password');
    }
}

function logout() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    document.getElementById('password').value = '';
}

// Tab Management
function showTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('border-blue-500', 'text-blue-600');
        button.classList.add('border-transparent', 'text-gray-500');
    });
    
    // Show selected tab content
    document.getElementById(tabName + 'Content').classList.remove('hidden');
    
    // Add active class to selected tab
    const activeTab = document.getElementById(tabName + 'Tab');
    activeTab.classList.remove('border-transparent', 'text-gray-500');
    activeTab.classList.add('border-blue-500', 'text-blue-600');
    
    currentTab = tabName;
}

// Data Management
function loadData() {
    loadMessages();
    loadProjects();
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    const messagesList = document.getElementById('messagesList');
    const messageCount = document.getElementById('messageCount');
    
    const unreadCount = messages.filter(msg => !msg.read).length;
    messageCount.textContent = unreadCount;
    messageCount.style.display = unreadCount > 0 ? 'inline' : 'none';
    
    if (messages.length === 0) {
        messagesList.innerHTML = '<p class="text-gray-500 text-center py-8">No messages yet</p>';
        return;
    }
    
    messagesList.innerHTML = messages.map(message => `
        <div class="border rounded-lg p-4 ${!message.read ? 'border-blue-300 bg-blue-50' : 'border-gray-200'}">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h4 class="font-semibold text-gray-900">${message.subject}</h4>
                    <p class="text-sm text-gray-600">From: ${message.name} (${message.email})</p>
                    <p class="text-xs text-gray-500">${message.date}</p>
                </div>
                <div class="flex space-x-2">
                    ${!message.read ? '<span class="bg-blue-500 text-white px-2 py-1 rounded text-xs">New</span>' : ''}
                    <button onclick="markAsRead('${message.id}')" class="text-blue-600 hover:text-blue-800">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button onclick="deleteMessage('${message.id}')" class="text-red-600 hover:text-red-800">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <p class="text-gray-700 whitespace-pre-wrap">${message.message}</p>
        </div>
    `).join('');
}

function loadProjects() {
    const projects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
    const projectsList = document.getElementById('projectsList');
    
    if (projects.length === 0) {
        projectsList.innerHTML = '<p class="text-gray-500 text-center py-8">No projects yet</p>';
        return;
    }
    
    projectsList.innerHTML = projects.map(project => `
        <div class="border rounded-lg p-4 border-gray-200">
            <div class="flex justify-between items-start mb-2">
                <div>
                    <h4 class="font-semibold text-gray-900">${project.title}</h4>
                    <span class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">${project.category}</span>
                </div>
                <div class="flex space-x-2">
                    <button onclick="editProject('${project.id}')" class="text-blue-600 hover:text-blue-800">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteProject('${project.id}')" class="text-red-600 hover:text-red-800">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <p class="text-gray-700 mb-2">${project.description}</p>
            <p class="text-sm text-gray-600 mb-2">URL: <a href="${project.url}" target="_blank" class="text-blue-600">${project.url}</a></p>
            <div class="flex flex-wrap gap-1">
                ${project.tech.map(tech => `<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Message Functions
function markAsRead(messageId) {
    const messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
    const updatedMessages = messages.map(msg => 
        msg.id === messageId ? { ...msg, read: true } : msg
    );
    localStorage.setItem('portfolio_messages', JSON.stringify(updatedMessages));
    loadMessages();
}

function deleteMessage(messageId) {
    if (confirm('Are you sure you want to delete this message?')) {
        const messages = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        const updatedMessages = messages.filter(msg => msg.id !== messageId);
        localStorage.setItem('portfolio_messages', JSON.stringify(updatedMessages));
        loadMessages();
    }
}

// Project Functions
function addProject() {
    const title = document.getElementById('projectTitle').value;
    const url = document.getElementById('projectUrl').value;
    const description = document.getElementById('projectDescription').value;
    const category = document.getElementById('projectCategory').value;
    const tech = document.getElementById('projectTech').value.split(',').map(t => t.trim());
    
    if (!title || !description) {
        alert('Title and description are required');
        return;
    }
    
    const project = {
        id: Date.now().toString(),
        title,
        url,
        description,
        category: category || 'Website',
        tech: tech.filter(t => t)
    };
    
    const projects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
    projects.unshift(project);
    localStorage.setItem('portfolio_projects', JSON.stringify(projects));
    
    // Clear form
    document.getElementById('projectTitle').value = '';
    document.getElementById('projectUrl').value = '';
    document.getElementById('projectDescription').value = '';
    document.getElementById('projectCategory').value = '';
    document.getElementById('projectTech').value = '';
    
    loadProjects();
}

function editProject(projectId) {
    const projects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
    const project = projects.find(p => p.id === projectId);
    
    if (project) {
        const newTitle = prompt('Title:', project.title);
        const newUrl = prompt('URL:', project.url);
        const newDescription = prompt('Description:', project.description);
        const newCategory = prompt('Category:', project.category);
        const newTech = prompt('Technologies (comma separated):', project.tech.join(', '));
        
        if (newTitle && newDescription) {
            const updatedProjects = projects.map(p => 
                p.id === projectId ? {
                    ...p,
                    title: newTitle,
                    url: newUrl || '',
                    description: newDescription,
                    category: newCategory || 'Website',
                    tech: newTech ? newTech.split(',').map(t => t.trim()) : []
                } : p
            );
            localStorage.setItem('portfolio_projects', JSON.stringify(updatedProjects));
            loadProjects();
        }
    }
}

function deleteProject(projectId) {
    if (confirm('Are you sure you want to delete this project?')) {
        const projects = JSON.parse(localStorage.getItem('portfolio_projects') || '[]');
        const updatedProjects = projects.filter(p => p.id !== projectId);
        localStorage.setItem('portfolio_projects', JSON.stringify(updatedProjects));
        loadProjects();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('password').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
});