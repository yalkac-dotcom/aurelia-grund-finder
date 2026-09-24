import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(headless=True)
    pg=await b.new_page(viewport={"width":1440,"height":900})
    for pa in ["/impressum","/datenschutz","/portfolio"]:
      for l in ["de","en","tr"]:
        await pg.goto(f"https://www.aureliaestates.de{pa}?lang={l}",wait_until="load"); await pg.wait_for_timeout(1500)
        r=await pg.evaluate("()=>{const i=document.querySelector('main img, section img');return [(i.currentSrc||i.src).split('/').pop().slice(0,40),i.naturalWidth,document.documentElement.lang,document.title.slice(0,40)]}")
        print(pa,l,r)
    await b.close()
asyncio.run(main())
