import React, { useState } from 'react';
import Select from 'react-select';
import { db } from './firebase'; // Ensure this path matches your actual file structure
import { collection, addDoc } from 'firebase/firestore';

const categories = [
  "Your profession",
  "Architect",
  "Priority Architect",
  "Store",
  "Designer/Scenographer/Set Designer/Artist",
  "Interior Studio",
  "Hotel",
  "Media",
  "Furniture Manufacturer",
  "Representative",
  "School",
  "Sewing Studio",
  "Upholsterer",
  "Sewing Procurement",
  "Interior Procurement",
  "Reseller",
  "Interior Studio Reseller",
  "Sewing Studio Reseller",
  "Upholsterer Reseller",
  "Other"
];

const samples = [
  'Sample Box ASTRID',
  'Sample Collection Alba*',
  'Sample Collection Ancona',
  'Sample Collection Antwerpen',
  'Sample Collection Arlon Recycled',
  'Sample Collection Aruba Mano Morbida',
  'Sample Collection Avena',
  'Sample Collection Axel',
  'Sample Collection Bellaria',
  'Sample Collection Benita',
  'Sample Collection Bern',
  'Sample Collection Bottero',
  'Sample Collection Brera',
  'Sample Collection Bucati',
  'Sample Collection California',
  'Sample Collection Chalet',
  'Sample Collection Como/Lago',
  'Sample Collection Davos',
  'Sample Collection Della Nonna Neutrals',
  'Sample Collection Dino',
  'Sample Collection Dolores Blackout*',
  'Sample Collection Dorotea/Paolina',
  'Sample Collection Etna',
  'Sample Collection Felix',
  'Sample Collection Firenze',
  'Sample Collection Fresia',
  'Sample Collection Harrietta Recycled- New colours 2023',
  'Sample Collection Heavy Neutrals',
  'Sample Collection Hedda',
  'Sample Collection Hemp',
  'Sample Collection Langhe & Nebbia',
  'Sample Collection Levanto',
  'Sample Collection Lucca',
  'Sample Collection Lugano',
  'Sample Collection Luna Dimout Recycled',
  'Sample Collection Malva',
  'Sample Collection Milano',
  'Sample Collection Modena MM',
  'Sample Collection Mons',
  'Sample Collection Monti & Rialto',
  'Sample Collection Murano',
  'Sample Collection Nesso',
  'Sample Collection- New Color Sheet',
  'Sample Collection Nicola Recycled',
  'Sample Collection Nizza/Grasse',
  'Sample Collection Nora',
  'Sample Collection Notte Dimout',
  'Sample Collection Olivia Recycled',
  'Sample Collection Parma',
  'Sample Collection Perfect Beige',
  'Sample Collection Ponza',
  'Sample Collection Prato',
  'Sample Collection Ripasso',
  'Sample Collection Rivoli',
  'Sample Collection Roma & Udine',
  'Sample Collection Sablon Washed',
  'Sample Collection Sabrina Recycled',
  'Sample Collection Savona',
  'Sample Collection Selected Neutrals',
  'Sample Collection Siena',
  'Sample Collection Stella Dimout',
  'Sample Collection Toledo',
  'Sample Collection Torno',
  'Sample Collection Trentina/Torino',
  'Sample Collection Udine WIP',
  'Sample Collection Valencia',
  'Sample Collection Varese',
  'Sample Collection Venere Mano Morbida',
  'Sample Collection Vittoria Recycled',
  'Sample Collection Wool Collection',
  'Sample Collection Wool Collection II',
  'Sample Collection Yoko',
  'Sample Sheet'
].map(sample => ({ label: sample, value: sample }));

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    countryCode: '',
    company: '',
    organizationNumber: '',
    country: '',
    city: '',
    category: '',
    samples: [],
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSelectChange = (selectedOptions) => {
    setFormData((prevState) => ({
      ...prevState,
      samples: selectedOptions ? selectedOptions.map(option => option.value) : []
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Orders"), formData);
      console.log("Document written with ID: ", docRef.id);
      alert('Form submitted successfully');
      // Reset form if needed
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        countryCode: '',
        company: '',
        organizationNumber: '',
        country: '',
        city: '',
        category: '',
        samples: [],
        message: ''
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert('Error submitting form');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Astrid Sample Order</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="mb-4 md:col-span-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
            Phone Number
          </label>
          <div className="flex">
            <input
              className="shadow appearance-none border rounded-l w-1/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="countryCode"
              type="text"
              placeholder="+46"
              value={formData.countryCode}
              onChange={handleChange}
              autoComplete="tel-country-code"
            />
            <input
              className="shadow appearance-none border rounded-r w-4/5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phoneNumber"
              type="tel"
              placeholder="Your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              autoComplete="tel-national"
            />
          </div>
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
            Company
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            type="text"
            placeholder="Your company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizationNumber">
            Organization Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="organizationNumber"
            type="text"
            placeholder="Your organization number"
            value={formData.organizationNumber}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
            Country
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="country"
            type="text"
            placeholder="Your country"
            value={formData.country}
            onChange={handleChange}
            autoComplete="country"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="Your city"
            value={formData.city}
            onChange={handleChange}
            autoComplete="address-level2"
          />
        </div>
        <div className="mb-4 md:col-span-1">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Profession
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            value={formData.category}
            onChange={handleChange}
            autoComplete="off"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sample">
            Select Sample
          </label>
          <Select
            id="sample"
            options={samples}
            isMulti
            isClearable
            placeholder="Select a sample..."
            value={samples.filter(option => formData.samples.includes(option.value))}
            onChange={handleSelectChange}
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between md:col-span-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
