import React from 'react'
import {StoryFn, Meta} from '@storybook/react'
import {Card, CardIconColors} from '.'
import {Stack, LabelColors, Grid} from '..'
import placeholderImage from '../fixtures/images/placeholder-600x400.png'
import {CopilotIcon, RocketIcon, GitBranchIcon, HeartIcon} from '@primer/octicons-react'

export default {
  title: 'Components/Card/features',
  component: Card,
} as Meta<typeof Card>

export const CTAText: StoryFn<typeof Card> = () => {
  return (
    <Card ctaText="Dicover how" href="https://github.com">
      <Card.Heading>GitHub Actions cheat sheet</Card.Heading>
      <Card.Description>
        In a recent TechTarget study, 70 percent of organizations reported they had adopted DevOps.
      </Card.Description>
    </Card>
  )
}

export const Label: StoryFn<typeof Card> = () => {
  return (
    <Card href="https://github.com">
      <Card.Heading>Code search & code view</Card.Heading>
      <Card.Label>Limited</Card.Label>
      <Card.Description>
        Enables you to rapidly search, navigate, and understand code, right from GitHub.com.
      </Card.Description>
    </Card>
  )
}

export const Icon: StoryFn<typeof Card> = () => {
  return (
    <Card href="https://github.com">
      <Card.Icon icon={RocketIcon} />
      <Card.Heading>Code search & code view</Card.Heading>
      <Card.Description>
        Enables you to rapidly search, navigate, and understand code, right from GitHub.com.
      </Card.Description>
    </Card>
  )
}

export const Border: StoryFn<typeof Card> = () => {
  return (
    <Card href="https://github.com" hasBorder>
      <Card.Icon icon={RocketIcon} />
      <Card.Heading>Code search & code view</Card.Heading>
      <Card.Description>
        Enables you to rapidly search, navigate, and understand code, right from GitHub.com.
      </Card.Description>
    </Card>
  )
}

export const IconColors: StoryFn<typeof Card> = () => {
  return (
    <Stack padding={'none'} direction="horizontal" gap={'normal'} style={{flexWrap: 'wrap'}}>
      {CardIconColors.map((color, id) => {
        return (
          <Card key={id} href="https://github.com" style={{maxWidth: '25%'}}>
            <Card.Icon icon={CopilotIcon} hasBackground color={color} />
            <Card.Heading>Collaboration is the key to DevOps success</Card.Heading>
            <Card.Description>
              This Card uses the <b>{color}</b> icon color
            </Card.Description>
          </Card>
        )
      })}
    </Stack>
  )
}

export const WithIconSVG = () => (
  <Card href="https://github.com">
    <Card.Icon
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20">
          <path
            d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
            fill="currentColor"
          ></path>
        </svg>
      }
      hasBackground
      color="purple"
    />
    <Card.Heading>Code search & code view</Card.Heading>
    <Card.Description>
      Enables you to rapidly search, navigate, and understand code, right from GitHub.com.
    </Card.Description>
  </Card>
)
WithIconSVG.storyName = 'Icon (native)'

export const IconAndLabel: StoryFn<typeof Card> = () => {
  return (
    <Card href="https://github.com">
      <Card.Icon icon={GitBranchIcon} color="purple" hasBackground />
      <Card.Heading>Code search & code view</Card.Heading>
      <Card.Label color="blue-purple">Beta</Card.Label>
      <Card.Description>
        Enables you to rapidly search, navigate, and understand code, right from GitHub.com.
      </Card.Description>
    </Card>
  )
}

export const Image: StoryFn<typeof Card> = () => {
  return (
    <Card href="https://github.com">
      <Card.Image src={placeholderImage} alt="placeholder, blank area with an gray background color" />
      <Card.Heading>Code search & code view</Card.Heading>
      <Card.Description>
        Enables you to rapidly search, navigate, and understand code, right from GitHub.com.
      </Card.Description>
    </Card>
  )
}

export const ImageAndLabel: StoryFn<typeof Card> = () => {
  return (
    <Card href="https://github.com">
      <Card.Image src={placeholderImage} alt="placeholder, blank area with an gray background color" />
      <Card.Heading>Code search & code view</Card.Heading>
      <Card.Label color="blue-purple">Beta</Card.Label>
      <Card.Description>
        Enables you to rapidly search, navigate, and understand code, right from GitHub.com.
      </Card.Description>
    </Card>
  )
}

const fixtureData: FixtureData = [
  {
    href: 'https://github.com',
    icon: CopilotIcon,
    iconColor: 'indigo',
    heading: 'Collaboration is the key to DevOps success',
    description: 'Everything you need to know about getting started with GitHub Actions.',
  },
  {
    href: 'https://github.com',
    icon: RocketIcon,
    iconColor: 'purple',
    heading: 'GitHub Actions cheat sheet and more',
    description: (
      <React.Fragment>
        In a recent TechTarget study, 70 percent of organizations reported they had adopted DevOps.
      </React.Fragment>
    ),
  },
  {
    href: 'https://github.com',
    icon: GitBranchIcon,
    iconColor: 'teal',
    heading: 'How healthy teams build better software',
    description: (
      <React.Fragment>Everything you need to know about getting started with GitHub Actions.</React.Fragment>
    ),
  },
  {
    href: 'https://github.com',
    icon: HeartIcon,
    iconColor: 'pink',
    heading: 'GitHub sponsors',
    description:
      'Financially support the open source projects your code depends. with a current GitHub for Startups partner.',
  },
]

type FixtureData = {
  href: string
  icon?: React.ReactNode
  iconColor?: (typeof CardIconColors)[number]
  label?: string
  labelColor?: (typeof LabelColors)[number]
  heading: string | React.ReactElement | React.ReactElement[]
  description: string | React.ReactElement | React.ReactElement[]
}[]

export const Stacked: StoryFn<typeof Card> = () => {
  return (
    <Grid>
      {fixtureData.map(({heading, description, href, icon, iconColor}, id) => {
        return (
          <Grid.Column key={id} span={{small: 6, medium: 6, large: 3, xlarge: 3}}>
            <Card key={id} href={href}>
              <Card.Icon icon={icon} hasBackground color={iconColor} />
              <Card.Heading>{heading}</Card.Heading>
              <Card.Description>{description}</Card.Description>
            </Card>
          </Grid.Column>
        )
      })}
    </Grid>
  )
}
