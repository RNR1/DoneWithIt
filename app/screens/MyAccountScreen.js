import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import Screen from '../components/Screen'
import { ListItem, ListItemSeparator } from '../components/lists'
import colors from '../config/colors'
import Icon from '../components/Icon'

const items = [
	{
		title: 'My Listings',
		icon: { name: 'format-list-bulleted', color: colors.primary }
	},
	{
		title: 'My Messages',
		screen: 'Messages',
		icon: { name: 'email', color: colors.secondary }
	}
]

export default function MyAccountScreen({ navigation }) {
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
					keyExtractor={(item) => item.title}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							onPress={() => navigation.navigate(item.screen)}
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
