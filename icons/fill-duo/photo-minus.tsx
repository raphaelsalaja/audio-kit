import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PhotoMinus({
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
          d="M16.7501 6H11.7501C10.5099 6 9.50012 4.9907 9.50012 3.75C9.50012 3.2876 9.64092 2.8579 9.88112 2.5H3.75012C2.23352 2.5 1.00012 3.7334 1.00012 5.25V12.75C1.00012 14.2666 2.23352 15.5 3.75012 15.5H14.2501C15.7667 15.5 17.0001 14.2666 17.0001 12.75V5.97461C16.917 5.98411 16.8357 6 16.7501 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13.1944 8.38381C12.1221 7.31151 10.378 7.31151 9.30569 8.38381L2.50259 15.187C2.87879 15.3804 3.2987 15.5 3.75 15.5H14.25C15.7666 15.5 17 14.2666 17 12.75V12.1895L13.1944 8.38381Z"
          fill={fill}
        />
        <path
          d="M5.75012 8.5C6.44048 8.5 7.00012 7.94036 7.00012 7.25C7.00012 6.55964 6.44048 6 5.75012 6C5.05977 6 4.50012 6.55964 4.50012 7.25C4.50012 7.94036 5.05977 8.5 5.75012 8.5Z"
          fill={fill}
        />
        <path
          d="M16.7501 4.5H11.7501C11.336 4.5 11.0001 4.1641 11.0001 3.75C11.0001 3.3359 11.336 3 11.7501 3H16.7501C17.1642 3 17.5001 3.3359 17.5001 3.75C17.5001 4.1641 17.1642 4.5 16.7501 4.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PhotoMinus;
