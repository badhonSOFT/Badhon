import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Eye, Trash2, Plus, Edit, Save, X } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
}

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tech: string[];
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newProject, setNewProject] = useState<Partial<Project>>({});

  const ADMIN_PASSWORD = "badhon2024"; // Change this to a secure password

  useEffect(() => {
    // Load data from localStorage
    const savedMessages = localStorage.getItem("portfolio_messages");
    const savedProjects = localStorage.getItem("portfolio_projects");
    
    if (savedMessages) setMessages(JSON.parse(savedMessages));
    if (savedProjects) setProjects(JSON.parse(savedProjects));
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword("");
    } else {
      alert("Invalid password");
    }
  };

  const markAsRead = (id: string) => {
    const updated = messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    );
    setMessages(updated);
    localStorage.setItem("portfolio_messages", JSON.stringify(updated));
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter(msg => msg.id !== id);
    setMessages(updated);
    localStorage.setItem("portfolio_messages", JSON.stringify(updated));
  };

  const saveProject = () => {
    if (editingProject) {
      const updated = projects.map(p => 
        p.id === editingProject.id ? editingProject : p
      );
      setProjects(updated);
      localStorage.setItem("portfolio_projects", JSON.stringify(updated));
      setEditingProject(null);
    }
  };

  const addProject = () => {
    if (newProject.title && newProject.description) {
      const project: Project = {
        id: Date.now().toString(),
        title: newProject.title || "",
        description: newProject.description || "",
        url: newProject.url || "",
        category: newProject.category || "Website",
        tech: newProject.tech || []
      };
      const updated = [...projects, project];
      setProjects(updated);
      localStorage.setItem("portfolio_projects", JSON.stringify(updated));
      setNewProject({});
    }
  };

  const deleteProject = (id: string) => {
    const updated = projects.filter(p => p.id !== id);
    setProjects(updated);
    localStorage.setItem("portfolio_projects", JSON.stringify(updated));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>
            Logout
          </Button>
        </div>

        <Tabs defaultValue="messages" className="space-y-6">
          <TabsList>
            <TabsTrigger value="messages">
              Messages ({messages.filter(m => !m.read).length})
            </TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="messages">
            <div className="grid gap-4">
              {messages.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center text-muted-foreground">
                    No messages yet
                  </CardContent>
                </Card>
              ) : (
                messages.map((message) => (
                  <Card key={message.id} className={!message.read ? "border-primary" : ""}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{message.subject}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            From: {message.name} ({message.email})
                          </p>
                          <p className="text-xs text-muted-foreground">{message.date}</p>
                        </div>
                        <div className="flex gap-2">
                          {!message.read && (
                            <Badge variant="secondary">New</Badge>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => markAsRead(message.id)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteMessage(message.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="whitespace-pre-wrap">{message.message}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="space-y-6">
              {/* Add New Project */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Project</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Title</Label>
                      <Input
                        value={newProject.title || ""}
                        onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label>URL</Label>
                      <Input
                        value={newProject.url || ""}
                        onChange={(e) => setNewProject({...newProject, url: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={newProject.description || ""}
                      onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Category</Label>
                      <Input
                        value={newProject.category || ""}
                        onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                        placeholder="Website, E-commerce, Web App"
                      />
                    </div>
                    <div>
                      <Label>Technologies (comma separated)</Label>
                      <Input
                        value={newProject.tech?.join(", ") || ""}
                        onChange={(e) => setNewProject({...newProject, tech: e.target.value.split(", ")})}
                        placeholder="PHP, MySQL, JavaScript"
                      />
                    </div>
                  </div>
                  <Button onClick={addProject}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </CardContent>
              </Card>

              {/* Existing Projects */}
              <div className="grid gap-4">
                {projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>{project.title}</CardTitle>
                          <Badge variant="outline">{project.category}</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setEditingProject(project)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => deleteProject(project.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-2">{project.description}</p>
                      <p className="text-sm text-muted-foreground mb-2">URL: {project.url}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Edit Project Modal */}
        {editingProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Edit Project</CardTitle>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setEditingProject(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>URL</Label>
                    <Input
                      value={editingProject.url}
                      onChange={(e) => setEditingProject({...editingProject, url: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={editingProject.description}
                    onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Category</Label>
                    <Input
                      value={editingProject.category}
                      onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label>Technologies (comma separated)</Label>
                    <Input
                      value={editingProject.tech.join(", ")}
                      onChange={(e) => setEditingProject({...editingProject, tech: e.target.value.split(", ")})}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={saveProject}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setEditingProject(null)}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;