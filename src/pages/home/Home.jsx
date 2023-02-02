import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import WidgetWrapper from '../../components/WidgetWrapper';



function Home() {
      const { palette } = useTheme();
    return (
      <Box >
        <WidgetWrapper>
          <Typography
            color={palette.neutral.dark}
            variant="h5"
            fontWeight="500"
            sx={{ mb: "1.5rem" }}
          >
                    <h1>
                    Home
                    </h1>
          </Typography>
          {/* <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends?.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box> */}
        </WidgetWrapper>
      </Box>
    );
}

export default Home