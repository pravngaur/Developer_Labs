# Page Designer - Introduction
As a developer created the component types for YouTube & Instagram feeds. Your customer requirement is to create these components so that mechadisers can use these components to host the YouTube videos on storefront pages.

# Business Requirements

## YouTube Player Component

- As an Architect/Developer/BA Work with merchandising team to understand the functional requirements, finalize the components – merchant driven attributes & UX.
- Create a Banner-Styled player component for YouTube hosted brand videos.
- This component should be placed at the top of the page.
- Merchandisers should be able to configure the video ID, i.e. provide an attribute for enabling business to configure the Video of their choice.
- Once the Video ID is configured, this component should play a YouTube hosted Video.

## Instagram Feed

- As an Architect/Developer/BA Work with merchandising team to understand the functional requirements, finalize the components – merchant driven attributes & UX.
- Create a component to pull the Brand’s post from Instagram.
- Needs to fit in a 2-Column layout, where Instagram post will appear in one column and merchandisers driven content in other.
- Merchandisers should be able to configure the URL of Instagram Post in component attributes.
- Once the URL is configured, this component should be able to pull the Instagram Post and display in a 2-Column layout.

# Design Overview

## YouTube Player Component

- Component should enable merchandisers to configure the video by providing a YouTube ID.
- Define a Component Type meta file which exposes an attribute for merchandisers.
- Develop JS to get this ID and pass it to ISML.
- Develop an ISML which leverages the YouTube sourced library and loads a video in Iframe.

## Instagram Feed

- Component should enable merchandisers to configure the URL for the Instagram Post.
- Define Meta JSON File for this new Component Type – this will define the attribute definition types.
- Develop a JS script to get the attribute values and pass it to template.
- Develop an ISML to get the Instagram Post for the configured URL.

The code of these Components is provided in this Repo, have a look.

> This Repo is to provide a sample implementation -- not a production level implementation. For your customer implementations, you need to manage the standards & scope coverage yourself.
