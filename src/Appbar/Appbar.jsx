import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import ListItemIcon from '@mui/material/ListItemIcon';
import vn from '../img/vietnam.png';
import us from '../img/usa.png';
import Items from '../Items.jsx/items';
import { removeVietnameseAccent } from '@mieuteacher/meomeojs';
import { flexbox, fontSize } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Drawesr from '../Drawer/Drawer';
import img from '../img/1.jpg'
import { Link } from 'react-router-dom';
import { removeVietnameseTones } from '../utils/validate';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));



export default function AppBars() {
    const [language, setLanguage] = useState(localStorage.getItem("locales") || "en");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [storedData, setStoredData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [locale, setLocale] = useState('');
    useEffect(() => {
        const data = localStorage.getItem('formData');
        const storedLocale = localStorage.getItem('locales');

        if (data) {
            const parsedData = JSON.parse(data);
            if (parsedData) {
                setStoredData(parsedData);
            } else {
                setStoredData([]);
            }
        }

        if (storedLocale) {
            setLocale(storedLocale);
        }
    }, []);

    console.log("searchResults", searchResults);
    useEffect(() => {
        if (storedData && storedData.length > 0) {
            const normalizedSearchTerm = normalizeString(searchTerm);
            let filteredResults = [];

            if (locale === 'en') {
                filteredResults = storedData.filter(item =>
                    item.en && (normalizeString(item.en.name).includes(normalizedSearchTerm) || normalizeString(removeVietnameseAccent(item.en.name)).includes(normalizedSearchTerm))
                );
            } else if (locale === 'vi') {
                filteredResults = storedData.filter(item =>
                    item.vi && (normalizeString(item.vi.name).includes(normalizedSearchTerm) || normalizeString(removeVietnameseTones(item.vi.name)).includes(normalizedSearchTerm))
                );
            }

            setSearchResults(filteredResults);
        }
    }, [storedData, locale, searchTerm]);

    function normalizeString(str) {
        return str.toLowerCase().replace(/\s+/g, ' ').trim();
    }


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };


    const changeLanguage = (lng) => {
        localStorage.setItem("locales", lng);
        setLanguage(lng);
        window.location.reload();
    };

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);
    };

    return (
        <div>
            <AppBar >
                <Toolbar sx={{ marginTop: '10px', marginBottom: '10px' }}>
                    <IconButton edge="start" color="inherit" aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Search style={{ width: '50%' }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Search>
                    <FormControl variant="standard" sx={{ marginLeft: 'auto', color: 'white', width: '35%' }}>
                        <Select
                            value={language}
                            onChange={handleLanguageChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{ color: 'white' }}
                        >
                            <MenuItem value="en">
                                <ListItemIcon onClick={() => changeLanguage('en')}>
                                    <Avatar src={us} sx={{ width: '70px', height: '100%' }} />
                                </ListItemIcon>
                                English
                            </MenuItem>
                            <MenuItem value="vi">
                                <ListItemIcon onClick={() => changeLanguage('vi')} >
                                    <Avatar src={vn} sx={{ width: '70px', height: '70px' }} />
                                </ListItemIcon>
                                Tiếng Việt
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}  >
                <Items />
            </Drawer>
            <List style={{ top: "150px" }}>
                {searchTerm == "" ? (
                    <div style={{ textAlign: 'center', padding: '20px', fontSize: '18px' }}>
                        <img src={img} />
                    </div>
                ) : (
                    searchResults.map((item, index) => (
                        <div key={index}>
                            <ListItem button component={Link} to={`/details/${item.id}`}>
                                <ListItemAvatar>
                                    <Avatar src={item.en.images[0]} style={{ width: '200px', height: '200px' }} />
                                </ListItemAvatar>
                                <ListItemText primary={locale === 'en' ? item.en.name : item.vi.name} />
                            </ListItem>
                            <Divider />
                        </div>
                    ))
                )}
            </List>
            <Drawesr />
        </div >
    );
}
