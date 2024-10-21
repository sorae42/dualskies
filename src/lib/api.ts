import { AtpAgent } from "@atproto/api";

export const agent = new AtpAgent({
  service: "https://api.bsky.app",
});

agent.login({
  identifier: "bskyuser.bsky.social",
  password: "your_password_here",
})