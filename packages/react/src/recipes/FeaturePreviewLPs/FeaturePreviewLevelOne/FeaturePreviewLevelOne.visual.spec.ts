/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: FeaturePreviewLevelOne', () => {
  test('FeaturePreviewLevelOne / Default', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-feature-previews-level-1--level-one-default&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('FeaturePreviewLevelOne / Side-by-side', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-feature-previews-level-1--level-one-side-by-side&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('FeaturePreviewLevelOne / Side-by-side - Enteprise', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-feature-previews-level-1--level-one-side-by-side-enterprise&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
