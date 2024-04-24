"use server";

export default async function getAvatar(publisherId: string) {
  const random = Math.floor(Math.random() * 99 + 1);
  return `https://randomuser.me/api/portraits/men/${random}.jpg`;
}
