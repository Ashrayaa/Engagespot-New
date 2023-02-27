import Inapp from "public/inapp.svg";
import Email from "public/email.png";
import Search from "public/search.png";
import Slack from "public/slack.png";
import Notification from "public/noti.png";
import User from "public/user.png";
import Mobile from "public/mobilepush.png";
import Logs from "public/noti.png";
import Template from "public/noti.png";
import WhatsApp from "public/whatsapp.png";
import SMS from "public/sms.png";
import Client1 from "public/client1.svg";
import Blog1 from "public/Blog1.svg";
import Blog2 from "public/Blog2.svg";

export const BlogList = [
  {
id:300,
title:"Darkweb v2.0 is now live! Discover all the new features available",
iconimage:Blog2
  },
  {
    id:300,
    title:"Code refactoring best practices: When and how to do it",
    iconimage:Blog1
      },
]

export const TestimonialList = [
  {
    id: 200,
    iconimage: Client1,
    title: "“The best code-editor”",
    description:
      "Lorem ipsum dolor sit amet consectetur cillum adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet.",
    name: "John Carter",
    designation: "Back-End developer",
  },
  {
    id: 201,
    iconimage: Client1,
    title: "“The greatest IDE out there”",
    description:
      "Lorem ipsum dolor sit amet consectetur cillum adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet.",
    name: "John Carter",
    designation: "Systems Engineer",
  },
  {
    id: 202,
    iconimage: Client1,
    title: "“Darkweb is an excellent tool”",
    description:
      "Lorem ipsum dolor sit amet consectetur cillum adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet.",
    name: "John Carter",
    designation: "Web developer",
  },
  {
    id: 203,
    iconimage: Client1,
    title: "“The only tool I need”",
    description:
      "Lorem ipsum dolor sit amet consectetur cillum adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet.",
    name: "John Carter",
    designation: "System analyst",
  },
  {
    id: 204,
    iconimage: Client1,
    title: "“The best tool for my team”",
    description:
      "Lorem ipsum dolor sit amet consectetur cillum adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet.",
    name: "John Carter",
    designation: "Tech Lead",
  },
  {
    id: 205,
    iconimage: Client1,
    title: "“My favorite code editor”",
    description:
      "Lorem ipsum dolor sit amet consectetur cillum adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet.",
    name: "John Carter",
    designation: "Database administrator",
  },
  
];

export const Featurelist = [
  {
    id: 100,
    iconimage: Inapp,
    title: "In app notification",
    description: "In-app notification component for front-end apps",
  },
  {
    id: 101,
    iconimage: Email,
    title: "Email notification",
    description: " Send email to users via Amazon SES, Sendgrid etc.",
  },
  {
    id: 102,
    iconimage: Search,
    title: "Web push notification",
    description: "Built in support for browser push notifications.",
  },
  {
    id: 103,
    iconimage: Slack,
    title: "Slack",
    description: "Send chat messages to your users via Slack.",
  },
  {
    id: 104,
    iconimage: Notification,
    title: "Notification Batching",
    description:
      "Ability to combine frequent notifications into one to avoid spamming users",
  },
  {
    id: 105,
    iconimage: Mobile,
    title: "Mobile push",
    description: "Deliver push notifications via FCM, APNS etc",
  },
  {
    id: 106,
    iconimage: WhatsApp,
    title: "Whatsapp",
    description: "Send WhatsApp messages to your users.",
  },
  {
    id: 107,
    iconimage: User,
    title: "User preferences",
    description:
      "Allow your users to set their notification preferences. UI components included.",
  },
  {
    id: 108,
    iconimage: SMS,
    title: "SMS",
    description: "Send SMS notifications to your users.",
  },
  {
    id: 109,
    iconimage: Template,
    title: "Template Editor",
    description:
      "Manage notification content for all channels using our easy template editor",
  },
  {
    id: 110,
    iconimage: Logs,
    title: "Logs and monitoring ",
    description:
      "Get access to logs from providers to debug cross-channel delivery and analyze performance.",
  },
  {
    id: 111,
    iconimage: Logs,
    title: "Logs and monitoring ",
    description:
      "Get access to logs from providers to debug cross-channel delivery and analyze performance.",
  },
];
