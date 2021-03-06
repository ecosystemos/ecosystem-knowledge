import React, { useState } from "react";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";


const StarRating = React.forwardRef(
  ({ size, icon, scale, fillColor, strokeColor }, ref) => {
    const [rating, setRating] = useState(0);
    const buttons = [];

    const onClick = idx => {
      if (!isNaN(idx)) {
        // allow user to click first icon and set rating to zero if rating is already 1
        if (rating === 1 && idx === 1) {
          setRating(0);
        } else {
          setRating(idx);
        }
      }
    };

    const RatingIcon = ({ fill }) => {
      return (
        <Icon
          name={icon}
          size={`${size}px`}
          color={fillColor}
          stroke={strokeColor}
          onClick={onClick}
          fillOpacity={fill ? "100%" : "0"}
          
        />
      );
    };

    const RatingButton = ({ idx, fill }) => {
      return (
        <Box
          as="button"
          aria-label={`Rate ${idx}`}
          height={`${size}px`}
          width={`${size}px`}
          variant="unstyled"
          mx={1}
          onClick={() => onClick(idx)}
          _focus={{ outline: 0 }}
        >
          <RatingIcon fill={fill} />
        </Box>
      );
    };

    for (let i = 1; i <= scale; i++) {
      buttons.push(<RatingButton key={i} idx={i} fill={i <= rating} />);
    }

    return (
      <Stack isInline justifyContent='flex-start' marginBottom={'20px'}   marginLeft={-1}  paddingLeft='20px'>
        <input name="rating" type="hidden" value={rating} ref={ref} />
        {buttons}
        <Box >
          <Text fontSize="md">
          {rating} (18 reviews)
          </Text>
        </Box>
      </Stack>
    );
  }
);

StarRating.displayName = "StarRating";

export default StarRating;