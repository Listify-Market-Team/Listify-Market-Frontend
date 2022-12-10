import {ResponsiveBar} from '@nivo/bar'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = 
[
    {
      "country": "AD",
      "hot dog": 198,
      "hot dogColor": "hsl(337, 70%, 50%)",
      "burger": 79,
      "burgerColor": "hsl(63, 70%, 50%)",
      "sandwich": 33,
      "sandwichColor": "hsl(321, 70%, 50%)",
      "kebab": 183,
      "kebabColor": "hsl(18, 70%, 50%)",
      "fries": 125,
      "friesColor": "hsl(205, 70%, 50%)",
      "donut": 166,
      "donutColor": "hsl(39, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 185,
      "hot dogColor": "hsl(145, 70%, 50%)",
      "burger": 165,
      "burgerColor": "hsl(16, 70%, 50%)",
      "sandwich": 68,
      "sandwichColor": "hsl(131, 70%, 50%)",
      "kebab": 81,
      "kebabColor": "hsl(60, 70%, 50%)",
      "fries": 185,
      "friesColor": "hsl(184, 70%, 50%)",
      "donut": 29,
      "donutColor": "hsl(324, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 119,
      "hot dogColor": "hsl(244, 70%, 50%)",
      "burger": 68,
      "burgerColor": "hsl(303, 70%, 50%)",
      "sandwich": 197,
      "sandwichColor": "hsl(6, 70%, 50%)",
      "kebab": 117,
      "kebabColor": "hsl(53, 70%, 50%)",
      "fries": 156,
      "friesColor": "hsl(262, 70%, 50%)",
      "donut": 111,
      "donutColor": "hsl(311, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 5,
      "hot dogColor": "hsl(175, 70%, 50%)",
      "burger": 8,
      "burgerColor": "hsl(146, 70%, 50%)",
      "sandwich": 126,
      "sandwichColor": "hsl(258, 70%, 50%)",
      "kebab": 197,
      "kebabColor": "hsl(253, 70%, 50%)",
      "fries": 109,
      "friesColor": "hsl(162, 70%, 50%)",
      "donut": 45,
      "donutColor": "hsl(145, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 55,
      "hot dogColor": "hsl(201, 70%, 50%)",
      "burger": 20,
      "burgerColor": "hsl(60, 70%, 50%)",
      "sandwich": 6,
      "sandwichColor": "hsl(27, 70%, 50%)",
      "kebab": 200,
      "kebabColor": "hsl(123, 70%, 50%)",
      "fries": 11,
      "friesColor": "hsl(80, 70%, 50%)",
      "donut": 136,
      "donutColor": "hsl(237, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 29,
      "hot dogColor": "hsl(204, 70%, 50%)",
      "burger": 177,
      "burgerColor": "hsl(352, 70%, 50%)",
      "sandwich": 101,
      "sandwichColor": "hsl(351, 70%, 50%)",
      "kebab": 145,
      "kebabColor": "hsl(106, 70%, 50%)",
      "fries": 198,
      "friesColor": "hsl(292, 70%, 50%)",
      "donut": 178,
      "donutColor": "hsl(33, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 126,
      "hot dogColor": "hsl(16, 70%, 50%)",
      "burger": 137,
      "burgerColor": "hsl(87, 70%, 50%)",
      "sandwich": 187,
      "sandwichColor": "hsl(194, 70%, 50%)",
      "kebab": 137,
      "kebabColor": "hsl(239, 70%, 50%)",
      "fries": 132,
      "friesColor": "hsl(182, 70%, 50%)",
      "donut": 27,
      "donutColor": "hsl(207, 70%, 50%)"
    }
  ]

const BarChart = () => {

  return (
    <ResponsiveBar
        data={data}
        keys={[
            'hot dog',
            'burger',
            'sandwich',
            'kebab',
            'fries',
            'donut'
        ]}
        indexBy="country"
        margin={{ top: 50, right: 15, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
    />
  )
}

export default BarChart

const styles = StyleSheet.create({})