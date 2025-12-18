// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
      tutorialSidebar: [
        {
          type: 'category',
          label: 'Chapter 1: Intro to Physical AI & Basic Robotics',
          link: {type: 'doc', id: 'chapter1-intro-to-physical-ai/introduction'},
          items: [
            'chapter1-intro-to-physical-ai/lesson1-what-is-physical-ai',
            'chapter1-intro-to-physical-ai/lesson2-hardware-basics',
            'chapter1-intro-to-physical-ai/lesson3-programming-first-movements',
          ],
        },
      ],

      // But you can create a sidebar manually
      /*
      tutorialSidebar: [
        'intro',
        'hello',
        {
          type: 'category',
          label: 'Tutorial',
          items: ['tutorial-basics/create-a-document'],
        },
      ],
       */
    };
export default sidebars;
