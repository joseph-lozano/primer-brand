/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Heading', () => {
  test('Heading / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Scale (sizes)', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--scale&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Levels', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--levels&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Size', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--override-size&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Weight', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--override-weight&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Weight Responsive', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-heading--override-weight-responsive&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Stretch', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--override-stretch&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Stretch Responsive', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-heading--override-stretch-responsive&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Letter Spacing', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-heading--override-letter-spacing&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
