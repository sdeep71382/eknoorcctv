# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: routes.spec.ts >> every implemented route responds with an accessible document
- Location: tests\routes.spec.ts:6:5

# Error details

```
Test timeout of 45000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 45000ms.
```

# Page snapshot

```yaml
- generic [active] [ref=f32e1]:
  - link "Skip to main content" [ref=f32e2] [cursor=pointer]:
    - /url: "#main-content"
  - banner [ref=f32e3]:
    - generic [ref=f32e5]:
      - generic [ref=f32e6]:
        - link "☎ +91 9646049911" [ref=f32e7] [cursor=pointer]:
          - /url: tel:+91 9646049911
        - link "✉ infoskysecure@gmail.com" [ref=f32e8] [cursor=pointer]:
          - /url: mailto:infoskysecure@gmail.com
      - generic [aria-hidden] [ref=f32e9]:
        - generic [ref=f32e10]: f
        - generic [ref=f32e11]: ◎
        - generic [ref=f32e12]: 𝕏
    - generic [ref=f32e14]:
      - link "Sky Secure recreation home sky secure SECURITY SOLUTIONS" [ref=f32e15] [cursor=pointer]:
        - /url: /
        - generic [ref=f32e16]: Sky Secure recreation home
        - strong [ref=f32e17]: sky
        - generic [ref=f32e18]: secure
        - generic [ref=f32e19]: SECURITY SOLUTIONS
      - navigation "Main navigation" [ref=f32e20]:
        - link "Home" [ref=f32e21] [cursor=pointer]:
          - /url: /
        - link "About Us" [ref=f32e22] [cursor=pointer]:
          - /url: /about-us
        - button "Our Solutions" [ref=f32e24] [cursor=pointer]: Our Solutions ⌄
        - button "Our Product Range" [ref=f32e26] [cursor=pointer]: Our Product Range ⌄
        - link "Contact Us" [ref=f32e27] [cursor=pointer]:
          - /url: /contact-us
  - main [ref=f32e28]:
    - generic [ref=f32e31]:
      - paragraph [ref=f32e32]:
        - link "Home" [ref=f32e33] [cursor=pointer]:
          - /url: /
        - text: / Road Safety Products
      - heading "Road Safety Products" [level=1] [ref=f32e34]
    - generic [ref=f32e36]:
      - generic [ref=f32e37]:
        - generic [ref=f32e38]: SAFE
        - strong [ref=f32e39]: Road Safety Products
      - article [ref=f32e40]:
        - paragraph [ref=f32e41]: ▱ ROAD SAFETY PRODUCTS
        - heading "Road Safety Products" [level=2] [ref=f32e42]
        - paragraph [ref=f32e43]: Road Safety Products is listed in the public Sky Secure product range under Road Safety Products. Contact the team for the models, specifications, compatibility, and installation options currently offered.
        - heading "Publicly offered service path" [level=3] [ref=f32e44]
        - list [ref=f32e45]:
          - listitem [ref=f32e46]: Requirement discussion
          - listitem [ref=f32e47]: System design and product selection
          - listitem [ref=f32e48]: Installation support
          - listitem [ref=f32e49]: Ongoing maintenance and after-sales service
        - link "Contact Us →" [ref=f32e50] [cursor=pointer]:
          - /url: /contact-us
  - contentinfo [ref=f32e51]:
    - generic [ref=f32e52]:
      - generic [ref=f32e53]:
        - heading "Contact Info" [level=2] [ref=f32e54]
        - paragraph [ref=f32e55]: ⌖ SKY SECURE SCO–862, 2nd Floor, NAC, Manimajra, Sector–13, Chandigarh 160101
        - link "✉ skysecure@outlook.com" [ref=f32e56] [cursor=pointer]:
          - /url: mailto:skysecure@outlook.com
        - link "✉ infoskysecure@gmail.com" [ref=f32e57] [cursor=pointer]:
          - /url: mailto:infoskysecure@gmail.com
        - 'link "☎ Sales: +91 9646472008" [ref=f32e58] [cursor=pointer]':
          - /url: tel:+91 9646472008
        - 'link "☎ Complaint: +91 9646049911" [ref=f32e59] [cursor=pointer]':
          - /url: tel:+91 9646049911
        - link "◉ For Complaints, Message Us on WhatsApp" [ref=f32e60] [cursor=pointer]:
          - /url: https://wa.me/919646049911
      - generic [ref=f32e61]:
        - heading "Useful links" [level=2] [ref=f32e62]
        - link "Home" [ref=f32e63] [cursor=pointer]:
          - /url: /
        - link "About Us" [ref=f32e64] [cursor=pointer]:
          - /url: /about-us
        - link "Contact Us" [ref=f32e65] [cursor=pointer]:
          - /url: /contact-us
      - generic [ref=f32e66]:
        - heading "Our Solution" [level=2] [ref=f32e67]
        - link "Home Solutions" [ref=f32e68] [cursor=pointer]:
          - /url: /home-solutions
        - link "Office Solutions" [ref=f32e69] [cursor=pointer]:
          - /url: /office-solutions
        - link "Industrial Solutions" [ref=f32e70] [cursor=pointer]:
          - /url: /industrial-solutions
        - link "Society & Commercial Space" [ref=f32e71] [cursor=pointer]:
          - /url: /society-commercial-space-solutions
        - link "Educational Solutions" [ref=f32e72] [cursor=pointer]:
          - /url: /educational-solutions
        - link "Hospitality Solutions" [ref=f32e73] [cursor=pointer]:
          - /url: /hospitality-solutions
      - generic [ref=f32e74]:
        - heading "Our Location" [level=2] [ref=f32e75]
        - generic [ref=f32e76]:
          - generic [ref=f32e77]: CHANDIGARH
          - generic [ref=f32e78]: Map preview placeholder
    - generic [ref=f32e79]: Copyright ©2026. All rights reserved | Design recreated for demonstration
  - alert [ref=f32e80]
```