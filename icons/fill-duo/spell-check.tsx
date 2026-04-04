import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SpellCheck({
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
          d="M7.90078 2.47875C8.01273 2.19017 8.29047 2 8.60001 2H9.40201C9.71156 2 9.98931 2.19018 10.1013 2.47877L13.5922 11.4788C13.6817 11.7095 13.6517 11.9695 13.5118 12.1737C13.372 12.3779 13.1405 12.5 12.893 12.5H5.62224L4.45024 15.5212C4.30044 15.9074 3.86594 16.099 3.47976 15.9492C3.09359 15.7994 2.90197 15.3649 3.05178 14.9788L7.90078 2.47875ZM6.20412 11H11.7976L9.001 3.79008L6.20412 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.7082 11.2385C17.0366 11.491 17.098 11.9619 16.8455 12.2902L13.4485 16.7072C13.3169 16.8783 13.118 16.9844 12.9026 16.9984C12.6873 17.0124 12.4763 16.9329 12.3237 16.7803L10.7147 15.1713C10.4218 14.8784 10.4218 14.4036 10.7147 14.1107C11.0076 13.8178 11.4824 13.8178 11.7753 14.1107L12.7803 15.1156L15.6565 11.3758C15.909 11.0474 16.3799 10.986 16.7082 11.2385Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SpellCheck;
