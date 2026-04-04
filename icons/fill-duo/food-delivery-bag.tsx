import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FoodDeliveryBag({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M12.667 4C14.104 4 15.28 5.08 15.405 6.512L16.057 14.012C16.124 14.778 15.864 15.542 15.345 16.109C14.826 16.676 14.087 17.001 13.318 17.001H4.681C3.912 17.001 3.173 16.676 2.654 16.109C2.135 15.542 1.875 14.778 1.942 14.012L2.594 6.512C2.718 5.08 3.896 4 5.333 4H9.00474H12.667Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.5 3C7.5 2.17121 8.17121 1.5 9 1.5C9.82879 1.5 10.5 2.17121 10.5 3V4H12V3C12 1.34279 10.6572 0 9 0C7.34279 0 6 1.34279 6 3V4H7.5V3Z"
          fill={fill}
        />
        <path
          d="M9 7.5C9.41421 7.5 9.75 7.83579 9.75 8.25V10.75C9.75 11.1642 9.41421 11.5 9 11.5C8.58579 11.5 8.25 11.1642 8.25 10.75V8.25C8.25 7.83579 8.58579 7.5 9 7.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.49768 8.3089C7.5302 7.89596 7.22182 7.53484 6.80889 7.50232C6.39595 7.46979 6.03484 7.77817 6.00231 8.1911L5.77821 11.036C5.65941 12.5442 6.77675 13.846 8.25 13.989V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V13.989C11.2232 13.846 12.3406 12.5442 12.2218 11.036L11.9977 8.1911C11.9651 7.77817 11.604 7.46979 11.1911 7.50232C10.7782 7.53484 10.4698 7.89596 10.5023 8.3089L10.7264 11.1538C10.7837 11.8807 10.2093 12.502 9.48029 12.502H8.51969C7.79066 12.502 7.21632 11.8806 7.27358 11.1538L7.49768 8.3089Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FoodDeliveryBag;
