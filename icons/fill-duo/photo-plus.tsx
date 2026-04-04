import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoPlus({
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
          d="M16.7501 6H16.5001V6.25C16.5001 7.4907 15.4903 8.5 14.2501 8.5C13.0099 8.5 12.0001 7.4907 12.0001 6.25V6H11.7501C10.5099 6 9.50011 4.9907 9.50011 3.75C9.50011 3.2876 9.64092 2.8579 9.88112 2.5H3.75012C2.23352 2.5 1.00012 3.7334 1.00012 5.25V12.75C1.00012 14.2666 2.23352 15.5 3.75012 15.5H14.2501C15.7667 15.5 17.0001 14.2666 17.0001 12.75V5.97461C16.917 5.98411 16.8357 6 16.7501 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.1944 8.38381C12.1221 7.31151 10.378 7.31151 9.30566 8.38381L2.50256 15.187C2.87876 15.3804 3.29867 15.5 3.74997 15.5H14.25C15.7666 15.5 17 14.2666 17 12.75V12.1895L13.1944 8.38381Z"
          fill={fill}
        />
        <path
          d="M5.75012 8.5C6.44048 8.5 7.00012 7.94036 7.00012 7.25C7.00012 6.55964 6.44048 6 5.75012 6C5.05977 6 4.50012 6.55964 4.50012 7.25C4.50012 7.94036 5.05977 8.5 5.75012 8.5Z"
          fill={fill}
        />
        <path
          d="M16.7501 3H15.0001V1.25C15.0001 0.8359 14.6642 0.5 14.2501 0.5C13.836 0.5 13.5001 0.8359 13.5001 1.25V3H11.7501C11.336 3 11.0001 3.3359 11.0001 3.75C11.0001 4.1641 11.336 4.5 11.7501 4.5H13.5001V6.25C13.5001 6.6641 13.836 7 14.2501 7C14.6642 7 15.0001 6.6641 15.0001 6.25V4.5H16.7501C17.1642 4.5 17.5001 4.1641 17.5001 3.75C17.5001 3.3359 17.1642 3 16.7501 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhotoPlus;
