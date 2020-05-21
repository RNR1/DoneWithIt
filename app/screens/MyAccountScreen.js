import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/lists/ListItemSeparator'
import colors from '../config/colors'
import Icon from '../components/Icon'

const items = [
	{
		title: 'My Listings',
		icon: { name: 'format-list-bulleted', color: colors.primary }
	},
	{
		title: 'My Messages',
		icon: { name: 'email', color: colors.secondary }
	}
]

export default function MyAccountScreen() {
	return (
		<Screen>
			<ListItem
				title='Mosh Hamedani'
				subTitle='programmingwithmosh@gmail.com'
				image={require('../assets/mosh.jpg')}
				onPress={() => console.log('onpress')}
			/>
			<View style={styles.actions}>
				<FlatList
					data={items}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon name={item.icon.name} backgroundColor={item.icon.color} />
							}
						/>
					)}
					ItemSeparatorComponent={ListItemSeparator}
				/>
			</View>
			<ListItem
				title='Logout'
				IconComponent={<Icon name='logout' backgroundColor={colors.yellow} />}
			/>
		</Screen>
	)
}

const styles = StyleSheet.create({
	actions: { marginTop: 40, justifyContent: 'center', marginBottom: 20 }
})
