import { expect, test } from '@playwright/test'

const HOME = '/'

test.describe('Section - Footer', () => {
  const FOOTER_TEXT =
    'This landing page is open source, and you can find it here'
  const FOOTER_CORPORATE = 'raferdev@2023'
  test.beforeEach(async ({ page }) => {
    await page.waitForLoadState()
  })

  test('Expected text to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('footer')
    const textFooter = PAGE_LOCATOR.getByText(FOOTER_TEXT)

    await expect(textFooter).toBeVisible()
  })
  test('Expected corporate text to be visible', async ({ page }) => {
    await page.goto(HOME)

    const PAGE_LOCATOR = page.locator('footer')
    const textFooter = PAGE_LOCATOR.getByText(FOOTER_CORPORATE)

    await expect(textFooter).toBeVisible()
  })
})
