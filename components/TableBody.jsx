import React from 'react';

function TableBody() {
  const users = [
    {
      id: 1,
      name: 'Sophia Lee',
      avatar: 'https://storage.googleapis.com/a1aa/image/377357c1-965f-47b2-db26-3170036c5c4e.jpg',
      phone: '(702) 555-1234',
      branch: 'Las Vegas, NV',
      connectedApps: [
        {
          icon: 'https://storage.googleapis.com/a1aa/image/611e61fc-3112-4ab7-2e76-796bafa46b18.jpg',
          alt: 'Connected app icon with orange chart line on white background'
        },
        {
          icon: 'https://storage.googleapis.com/a1aa/image/bb6277cb-0981-475d-1d8a-036557058985.jpg',
          alt: 'Connected app icon with blue diamond shape on white background'
        }
      ],
      tags: 'Communications Collaboration'
    },
    {
      id: 2,
      name: 'Mason Lewis',
      avatar: 'https://storage.googleapis.com/a1aa/image/cc1f1b61-b6a8-46ff-f3fd-b6fbdbe0f21e.jpg',
      phone: '(213) 555-7891',
      branch: 'Los Angeles, CA',
      connectedApps: [
        {
          icon: 'https://storage.googleapis.com/a1aa/image/33cb94f4-cb8a-4d77-ef04-066345585dcf.jpg',
          alt: 'Connected app icon Slack logo with multicolor on white background'
        },
        {
          icon: 'https://storage.googleapis.com/a1aa/image/fdb226df-7ce2-4d66-3f24-549e22c59944.jpg',
          alt: 'Connected app icon Twitch logo purple on white background'
        }
      ],
      tags: 'Professional Network Recruitment'
    },
    {
      id: 3,
      name: 'Olivia Green',
      avatar: 'https://storage.googleapis.com/a1aa/image/e4cbb287-a3eb-4f03-4781-e94a659b5613.jpg',
      phone: '(312) 555-3456',
      branch: 'Chicago, IL',
      connectedApps: [
        {
          icon: 'https://storage.googleapis.com/a1aa/image/611e61fc-3112-4ab7-2e76-796bafa46b18.jpg',
          alt: 'Connected app icon with orange chart line on white background'
        },
        {
          icon: 'https://storage.googleapis.com/a1aa/image/bb6277cb-0981-475d-1d8a-036557058985.jpg',
          alt: 'Connected app icon with blue diamond shape on white background'
        }
      ],
      tags: 'Social Media Marketing'
    },
    {
      id: 4,
      name: 'Henry King',
      avatar: 'https://storage.googleapis.com/a1aa/image/70c473b1-12d9-4a51-30b1-fa7ef6f35d65.jpg',
      phone: '(415) 555-7890',
      branch: 'San Francisco, CA',
      connectedApps: [
        {
          icon: 'https://storage.googleapis.com/a1aa/image/ad13a410-da31-4d14-5204-2420e7347ce5.jpg',
          alt: 'Connected app icon with multicolor circle on white background'
        },
        {
          icon: 'https://storage.googleapis.com/a1aa/image/7e1f1341-64d7-4fae-cf4d-94c4ba528e18.jpg',
          alt: 'Connected app icon with blue M letter on white background'
        }
      ],
      tags: 'CRM Sales'
    },
    {
      id: 5,
      name: 'Ella White',
      avatar: 'https://storage.googleapis.com/a1aa/image/ae1a6690-3110-4849-98e3-753788225ff6.jpg',
      phone: '(702) 555-5678',
      branch: 'Las Vegas, NV',
      connectedApps: [
        {
          icon: 'https://storage.googleapis.com/a1aa/image/fdb226df-7ce2-4d66-3f24-549e22c59944.jpg',
          alt: 'Connected app icon Twitch logo purple on white background'
        },
        {
          icon: 'https://storage.googleapis.com/a1aa/image/611e61fc-3112-4ab7-2e76-796bafa46b18.jpg',
          alt: 'Connected app icon with orange chart line on white background'
        }
      ],
      tags: 'Cloud Storage Files'
    }
  ];

  return (
    <tbody>
      {users.map((user, index) => (
        <tr 
          key={user.id} 
          className={`${index < users.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50`}
        >
          <td className="px-4 py-3">
            <input
              aria-label={`Select ${user.name}`}
              className="cursor-pointer"
              type="checkbox"
            />
          </td>
          <td className="px-4 py-3 flex items-center space-x-3">
            <img
              alt={`User avatar of ${user.name}`}
              className="w-8 h-8 rounded-full"
              height="32"
              src={user.avatar}
              width="32"
            />
            <span className="font-semibold select-none">{user.name}</span>
          </td>
          <td className="px-4 py-3 select-none">{user.phone}</td>
          <td className="px-4 py-3 select-none">{user.branch}</td>
          <td className="px-4 py-3 flex space-x-2">
            {user.connectedApps.map((app, idx) => (
              <img
                key={idx}
                alt={app.alt}
                className="w-5 h-5"
                height="20"
                src={app.icon}
                width="20"
              />
            ))}
          </td>
          <td className="px-4 py-3 select-none">{user.tags}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;