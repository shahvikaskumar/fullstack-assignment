const mongoose = require('mongoose');

const carddata = [
  {
      _id: new mongoose.Types.ObjectId("66c2cde3568af2dd0b4fedf2"),
      title: "Branches",
      description: "Abstract Branches lets you manage, version, and document your designs in one place.",
      createdAt: new Date("2024-08-19T04:45:23.702Z"),
      updatedAt: new Date("2024-08-19T04:45:23.702Z")
  },
  {
      _id: new mongoose.Types.ObjectId("66c2cebd568af2dd0b4fedf8"),
      title: "Manage your account",
      description: "Configure your account settings, such as your email, profile details, and password.",
      createdAt: new Date("2024-08-19T04:49:01.356Z"),
      updatedAt: new Date("2024-08-19T04:49:01.356Z")
  },
  {
      _id: new mongoose.Types.ObjectId("66c2cf43568af2dd0b4fedfb"),
      title: "Manage organizations, teams, and projects",
      description: "Use Abstract organizations, teams, and projects to organize your people and your work.",
      createdAt: new Date("2024-08-19T04:51:15.151Z"),
      updatedAt: new Date("2024-08-19T04:51:15.151Z")
  },
  {
      _id: new mongoose.Types.ObjectId("66c2cf66568af2dd0b4fedfd"),
      title: "Manage billing",
      description: "Change subscriptions and payment details.",
      createdAt: new Date("2024-08-19T04:51:50.464Z"),
      updatedAt: new Date("2024-08-19T04:51:50.464Z")
  },
  {
      _id: new mongoose.Types.ObjectId("66c2cfab568af2dd0b4fedff"),
      title: "Authenticate to Abstract",
      description: "Set up and configure SSO, SCIM, and Just-in Time provisioning.",
      createdAt: new Date("2024-08-19T04:52:59.848Z"),
      updatedAt: new Date("2024-08-19T04:52:59.848Z")
  },
  {
      _id: new mongoose.Types.ObjectId("66c2cfcc568af2dd0b4fee01"),
      title: "Abstract support",
      description: "Get in touch with a human.",
      createdAt: new Date("2024-08-19T04:53:32.898Z"),
      updatedAt: new Date("2024-08-19T04:53:32.898Z")
  }

];

module.exports = carddata;