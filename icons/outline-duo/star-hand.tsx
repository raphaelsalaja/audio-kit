import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StarHand({
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
          d="m8.7634,4.5771l-1.8942-3.8383-1.8942,3.8383-4.2366.6156,3.0654,2.9884-.7239,4.2188,3.7892-1.9914,1.5259.8019-1.0371-2.2095c-.292-.625-.021-1.369.604-1.661.626-.293,1.37-.023,1.663.603l.423.8992-.1134-.661,3.0654-2.9884-4.2366-.6156Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m17.25,15.225c0-2.059-.236-3.639-1-4.223-.875-.669-3.152-.838-5.295-.232l-1.33-2.827c-.293-.626-1.037-.896-1.663-.603-.625.292-.896,1.036-.604,1.661l2.561,5.456-2.724-.501c-.587-.108-1.167.224-1.371.785-.232.637.098,1.34.736,1.569l2.616.941"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <polyline
          fill="none"
          points="5.1455 11.3477 3.09 12.4 3.813 8.185 .75 5.2 4.982 4.585 6.875 .75 8.768 4.585 13 5.2 12.0407 6.1347"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default StarHand;
