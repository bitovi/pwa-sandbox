export const title = {
  family: "Poppins",
  weight: 700,
  size: 4,
}

export const heading = {
  family: "Poppins",
  weight: 700,
  size: 2,
}

export const content = {
  family: "Inter",
  weight: 400,
  size: 1,
}

export const code = {
  family: "Roboto Mono",
  weight: 400,
  size: 1,
}

export const hSize = (level) => {
  if (level === 1) return title.size

  // 2...6 -> heading...content
  return ((4 - (level - 2)) / 4) * (heading.size - content.size) + content.size
}

export default {
  title,
  heading,
  content,
  code,
  hSize,
}
