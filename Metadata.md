# Metadata / Route Groups
https://nomadcoders.co/nextjs-for-beginners/lectures/4700

- needed to be exported
- metadata is merged!
- only pages or layouts can export metadata
- **metadata should only be in sever component**
  
### metadata template
```
export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default:"Next Movies"
  },
  description: 'Next14 Tutorial',
}
```
template 형태로 merge 가능하다.