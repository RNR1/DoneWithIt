import React, { useState } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import {
	ListItem,
	ListItemDeleteAction,
	ListItemSeparator
} from '../components/lists'
import Screen from '../components/Screen'

const initialData = [
	{
		id: 1,
		title: 'title',
		subTitle: 'sub',
		image: require('../assets/mosh.jpg')
	},
	{
		id: 2,
		title: 'title',
		subTitle: 'sub',
		image: require('../assets/mosh.jpg')
	},
	{
		id: 3,
		title: 'title',
		subTitle: 'sub',
		image: require('../assets/mosh.jpg')
	}
]

export default function MessagesScreen() {
	const [messages, setMessages] = useState(initialData)
	const [refreshing, setRefreshing] = useState(false)

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.subTitle}
						image={item.image}
						onPress={() => console.log('pressed')}
						renderRightActions={() => (
							<ListItemDeleteAction
								onPress={() => {
									setMessages(messages.filter((d) => d.id !== item.id))
								}}
							/>
						)}
						showChevron
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() => {
					setMessages([
						{
							id: 2,
							title: 'title',
							subTitle: 'sub',
							image: require('../assets/mosh.jpg')
						}
					])
				}}
			/>
		</Screen>
	)
}

const styles = StyleSheet.create({})
