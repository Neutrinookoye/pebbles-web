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
					permission: ['USER', 'ADMIN', 'BUSINESS', 'INDIVIDUAL'],
				},
				{
					id: 'profile',
					title: 'Profile',
					type: 'item',
					url: '/dashboard/profile',
					icon: 'feather icon-user',
					permission: ['USER', 'ADMIN', 'BUSINESS', 'INDIVIDUAL'],
				},
				{
					id: 'bookings',
					title: 'Bookings',
					type: 'item',
					url: '/dashboard/bookings',
					icon: 'feather icon-user',
					permission: ['USER', 'ADMIN', 'BUSINESS', 'INDIVIDUAL'],
				},
				{
					id: 'saved-apartments',
					title: 'Saved Apartments',
					type: 'item',
					url: '/dashboard/saved-apartments',
					icon: 'feather icon-user',
					permission: ['USER', 'BUSINESS', 'INDIVIDUAL'],
				},
				{
					id: 'notifications',
					title: 'Notifications',
					type: 'item',
					url: '/dashboard/notifications',
					icon: 'feather icon-user',
					permission: ['USER', 'ADMIN', 'BUSINESS', 'INDIVIDUAL'],
				},
				{
					id: 'list-an-apartment',
					title: 'List an Apartment',
					type: 'item',
					url: '/dashboard/apartment/add',
					icon: 'feather icon-user',
					permission: ['BUSINESS', 'INDIVIDUAL'],
				},
			],
		},
	],
}
