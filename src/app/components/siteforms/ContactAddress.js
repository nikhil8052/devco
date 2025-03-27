
'use client';
const ContactAddress = () => {
    const addresses = [
        {
          icon: '/images/locventrfff.svg', // Replace with actual icon path
          title: 'Seattle, WA',
          description: '1425 Broadway 22689 Seattle, WA 98112',
        },
        {
          icon: '/images/locventrfff.svg', // Replace with actual icon path
          title: 'West Palm Beach, FL',
          description: '700 S Rosemary Ave Suite 204 West Palm Beach, FL 33401',
        },
        {
          icon: '/images/phnvectrkjkjh.svg', // Replace with actual icon path
          title: '',
          description: '',
          phnlink: '+12062102954',
        },
      ];
      
  return (
    <div className="address_wrapper">
    {addresses.map((address, index) => (
    <div className="address_box" key={index}>
        <div className="address_icon">
        <img src={address.icon} alt={`${address.title || 'Phone'} icon`} />
        </div>
        <div className="addrs-text">
        {address.title && <h4>{address.title}</h4>}
        {address.description && <p>{address.description}</p>}
        {address.phnlink && (
            <p>
            <a href={`tel:${address.phnlink}`} className="phone_link">
                {address.phnlink}
            </a>
            </p>
        )}
        </div>
    </div>
    ))}
    </div>
  );
};

export default ContactAddress;
