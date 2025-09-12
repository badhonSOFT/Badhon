'use client';

import * as React from 'react';
import { HelpCircle, MessageCircle, ChevronDown } from 'lucide-react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@/lib/utils';

const CustomAccordion = AccordionPrimitive.Root;

const CustomAccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('', className)}
		{...props}
	/>
));
CustomAccordionItem.displayName = 'CustomAccordionItem';

const CustomAccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				'group flex flex-1 items-center justify-between gap-4 rounded-2xl p-4 text-left',
				'bg-[#ffff] dark:bg-zinc-800 dark:text-white transition-all hover:bg-gray-50/70 hover:shadow-md',
				'dark:hover:bg-zinc-700/60 focus-visible:outline-none focus-visible:ring-2',
				'dark:data-[state=open]:bg-zinc-700 data-[state=open]:shadow-md',
				className
			)}
			{...props}
		>
			<div className="flex items-center gap-4">
				<HelpCircle className="h-5 w-5 text-gray-600 dark:text-white" />
				<span className="text-lg font-medium dark:text-zinc-50 text-zinc-700 tracking-wide">
					{children}
				</span>
			</div>
			<div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gray-200 dark:bg-zinc-600/70 transition-transform group-hover:scale-105 group-data-[state=open]:rotate-180">
				<ChevronDown className="h-4 w-4 text-gray-800 dark:text-white" />
			</div>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
CustomAccordionTrigger.displayName = 'CustomAccordionTrigger';

const CustomAccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			'overflow-hidden dark:text-white',
			'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down pb-2',
			className
		)}
		{...props}
	>
		<div className="mt-4 ml-14">
			<div className="flex items-start gap-4 rounded-2xl bg-[#ffff] dark:bg-zinc-700 p-4 shadow-md transition-all">
				<span className="flex-1 text-md leading-relaxed">{children}</span>
				<div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-300/70 dark:bg-zinc-600 transition-transform hover:scale-105">
					<MessageCircle className="h-5 w-5 text-gray-700 dark:text-white" />
				</div>
			</div>
		</div>
	</AccordionPrimitive.Content>
));
CustomAccordionContent.displayName = 'CustomAccordionContent';

export {
	CustomAccordion,
	CustomAccordionItem,
	CustomAccordionTrigger,
	CustomAccordionContent,
};

const faqs = [
	{
		question: "What's your typical response time?",
		answer: "I usually respond to emails and messages within 2-4 hours during business days. For urgent projects, WhatsApp is the fastest way to reach me."
	},
	{
		question: "How do we start a new project?",
		answer: "We begin with a discovery call to understand your requirements, then I provide a detailed proposal with timeline and costs. Once approved, we kick off with a 50% advance payment."
	},
	{
		question: "What are your payment milestones?",
		answer: "I work with a 50% advance and 50% on completion model for most projects. For larger projects, we can discuss milestone-based payments."
	},
	{
		question: "Do you provide ongoing maintenance?",
		answer: "Yes, I offer ongoing maintenance and support packages. This includes security updates, content updates, and technical support."
	}
];

export function AccordionComponent() {
	return (
		<div className="max-w-4xl w-full mx-auto">
			<h3 className="mb-8 text-center text-3xl font-bold text-foreground">
				Frequently Asked Questions
			</h3>
			<CustomAccordion
				type="single"
				collapsible
				defaultValue="item-0"
				className="space-y-6"
			>
				{faqs.map((faq, index) => (
					<CustomAccordionItem
						key={index}
						value={`item-${index}`}
					>
						<CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
						<CustomAccordionContent>{faq.answer}</CustomAccordionContent>
					</CustomAccordionItem>
				))}
			</CustomAccordion>
		</div>
	);
}