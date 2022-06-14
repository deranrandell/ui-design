import React from 'react'
import { styled } from '@mui/system'
import { Menu, MenuItem, List, ListItem, ListItemText } from '@mui/material'

const MenuRoot = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
}))

const options = [
    'Choose a project',
    'Project One',
    'Project Two',
    'Project Three',
]

export default function SelectedMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const [selectedIndex, setSelectedIndex] = React.useState(1)

    function handleClickListItem(event) {
        setAnchorEl(event.currentTarget)
    }
    function handleMenuItemClick(event, index) {
        setSelectedIndex(index)
        setAnchorEl(null)
    }
    function handleClose() {
        setAnchorEl(null)
    }

    return (
        <MenuRoot>
            <List component="nav" aria-label="Device settings">
                <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label="When device is locked"
                    onClick={handleClickListItem}
                >
                    <ListItemText
                        primary=""
                        secondary={options[selectedIndex]}
                    />
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        disabled={index === 0}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </MenuRoot>
    )
}
