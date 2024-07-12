import React, { useState, useEffect } from 'react';
import { fetchChar } from '../api/rickAndMortyApi';
import CharacterCard from './CardChar';
import './CharacterList.css';

const CharacterList = () => {
  const [char, setChar] = useState([]);
  const [term, setTerm] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterOrigin, setFilterOrigin] = useState('');
  const [sort, setSort] = useState('asc');

  useEffect(() => {
    const getChar = async () => {
      const data = await fetchChar();
      setChar(data.results);
    };
    getChar();
  }, []);

  const search = (event) => {
    setTerm(event.target.value);
  };

  const onSpeciesChange = (event) => {
    setFilterSpecies(event.target.value);
  };

  const onGenderChange = (event) => {
    setFilterGender(event.target.value);
  };

  const onOriginChange = (event) => {
    setFilterOrigin(event.target.value);
  };

  const onOrderChange = (event) => {
    setSort(event.target.value);
  };

  const filteredCharacters = char.filter((character) => {
    return (
      character.name.toLowerCase().includes(term.toLowerCase()) &&
      (filterSpecies === '' || character.species === filterSpecies) &&
      (filterGender === '' || character.gender === filterGender) &&
      (filterOrigin === '' || character.origin.name === filterOrigin)
    );
  }).sort((a, b) => {
    return sort === 'asc' ? a.id - b.id : b.id - a.id;
  });

  return (
    <div className="character-list-container">
      <div className="filters">
        <div className="filter-section">
          <h4>Species</h4>
          <div>
            <label>
              <input
                type="radio"
                name="species"
                value=""
                checked={filterSpecies === ''}
                onChange={onSpeciesChange}
              />{' '}
              All Species
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="species"
                value="Human"
                checked={filterSpecies === 'Human'}
                onChange={onSpeciesChange}
              />{' '}
              Human
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="species"
                value="Alien"
                checked={filterSpecies === 'Alien'}
                onChange={onSpeciesChange}
              />{' '}
              Alien
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="species"
                value="Other Species"
                checked={filterSpecies === 'Other Species'}
                onChange={onSpeciesChange}
              />{' '}
              Other Species
            </label>
          </div>
        </div>
        <div className="filter-section">
          <h4>Gender</h4>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value=""
                checked={filterGender === ''}
                onChange={onGenderChange}
              />{' '}
              All Genders
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={filterGender === 'Male'}
                onChange={onGenderChange}
              />{' '}
              Male
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={filterGender === 'Female'}
                onChange={onGenderChange}
              />{' '}
              Female
            </label>
          </div>
        </div>
        <div className="filter-section">
          <h4>Origin</h4>
          <div>
            <label>
              <input
                type="radio"
                name="origin"
                value=""
                checked={filterOrigin === ''}
                onChange={onOriginChange}
              />{' '}
              All Origins
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="origin"
                value="unknown"
                checked={filterOrigin === 'unknown'}
                onChange={onOriginChange}
              />{' '}
              Unknown
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="origin"
                value="Post-Apocalyptic Earth"
                checked={filterOrigin === 'Post-Apocalyptic Earth'}
                onChange={onOriginChange}
              />{' '}
              Post-Apocalyptic Earth
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="origin"
                value="Nuptia 4"
                checked={filterOrigin === 'Nuptia 4'}
                onChange={onOriginChange}
              />{' '}
              Nuptia 4
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="origin"
                value="Other Origins"
                checked={filterOrigin === 'Other Origins'}
                onChange={onOriginChange}
              />{' '}
              Other Origins
            </label>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="left-content">
          <div className="selected-filters">
            <h4>Fitler Added</h4>
            {filterSpecies && (
              <span className="filter-tag">
                {filterSpecies} <button onClick={() => setFilterSpecies('')}>x</button>
              </span>
            )}
            {filterGender && (
              <span className="filter-tag">
                {filterGender} <button onClick={() => setFilterGender('')}>x</button>
              </span>
            )}
            {filterOrigin && (
              <span className="filter-tag">
                {filterOrigin} <button onClick={() => setFilterOrigin('')}>x</button>
              </span>
            )}
          </div>
          <div className="search-section">
            <input
              type="text"
              placeholder="Search here"
              value={term}
              onChange={search}
            />
          </div>
        </div>
        <div className="right-content">
          <div className="sort-section">
            <h4>Sort here</h4>
            <select onChange={onOrderChange} value={sort}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>
        <div className="character-list">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
