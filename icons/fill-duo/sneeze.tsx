import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sneeze({
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
          d="M9.74499 7.494C9.68099 5.737 8.95099 4.107 7.67399 2.881C6.33599 1.596 4.56599 0.923004 2.71899 1.006C2.31699 1.023 1.99899 1.353 1.99899 1.756V16.251C1.99899 16.665 2.33499 17.001 2.74899 17.001H5.24899C5.66299 17.001 5.99899 16.665 5.99899 16.251V14.501H6.88799C8.32299 14.501 9.52699 13.38 9.63099 11.95L9.70899 10.875L10.777 10.448C10.994 10.362 11.158 10.179 11.221 9.954C11.284 9.729 11.239 9.488 11.099 9.301L9.74499 7.494Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.75 12.5C13.1642 12.5 13.5 12.164 13.5 11.75C13.5 11.336 13.1642 11 12.75 11C12.3358 11 12 11.336 12 11.75C12 12.164 12.3358 12.5 12.75 12.5Z"
          fill={fill}
        />
        <path
          d="M15.25 10.5C15.6642 10.5 16 10.164 16 9.75C16 9.336 15.6642 9 15.25 9C14.8358 9 14.5 9.336 14.5 9.75C14.5 10.164 14.8358 10.5 15.25 10.5Z"
          fill={fill}
        />
        <path
          d="M15.25 14.5C15.6642 14.5 16 14.164 16 13.75C16 13.336 15.6642 13 15.25 13C14.8358 13 14.5 13.336 14.5 13.75C14.5 14.164 14.8358 14.5 15.25 14.5Z"
          fill={fill}
        />
        <path
          d="M6 7C6 7.552 6.448 8 7 8C7.552 8 8 7.552 8 7C8 6.448 7.552 6 7 6C6.448 6 6 6.448 6 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sneeze;
