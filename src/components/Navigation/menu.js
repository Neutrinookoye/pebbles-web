export default {
	items: [
		{
			id: 'navigation',
			title: '',
			type: 'group',
			icon: 'icon-navigation',
			children: [
				{
					id: 'overview',
					title: 'Overview',
					type: 'item',
					url: '/dashboard/home',
					icon: 'feather icon-home',
				},
				{
					id: 'profile',
					title: 'Profile',
					type: 'item',
					url: '/dashboard/profile',
					icon: 'feather icon-user',
				},
				{
					id: 'bookings',
					title: 'Bookings',
					type: 'item',
					url: '/dashboard/bookings',
					icon: 'feather icon-user',
				},
				{
					id: 'saved-apartments',
					title: 'Saved Apartments',
					type: 'item',
					url: '/dashboard/saved-apartments',
					icon: 'feather icon-user',
				},
				{
					id: 'notifications',
					title: 'Notifications',
					type: 'item',
					url: '/dashboard/notifications',
					icon: 'feather icon-user',
				},
				{
					id: 'list-an-apartment',
					title: 'List an Apartment',
					type: 'item',
					url: '/dashboard/apartment/add',
					icon: 'feather icon-user',
				},
			],
		},
	],
}
