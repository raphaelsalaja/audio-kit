import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BurgerSlash({
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
          d="M6.46806 15.25L6.46805 14.7139L7.85796 13.324C8.18882 13.4288 8.57009 13.5 8.99899 13.5C10.1955 13.5 11.0214 12.9456 11.416 12.6552C12.447 13.414 13.6587 13.5 14.776 12.8786C14.6983 13.2322 14.4135 15.25 11.75 15.25H6.46806Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M10.1778 7.75H9.00001H3.10201C2.77701 7.75 2.53801 7.451 2.61401 7.135C2.93501 5.8 4.09501 2.75 8.00001 2.75H9.00001H10C11.7581 2.75 12.9598 3.36802 13.779 4.16948L10.1778 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.474 10.526C7.227 10.369 6.952 10.25 6.584 10.25C5.519 10.25 5.232 11.25 4.167 11.25C3.102 11.25 2.815 10.25 1.75 10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 5.75C8.16421 5.75 8.5 5.41421 8.5 5C8.5 4.58579 8.16421 4.25 7.75 4.25C7.33579 4.25 7 4.58579 7 5C7 5.41421 7.33579 5.75 7.75 5.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13.805 4.195C12.985 3.381 11.777 2.75 10 2.75H9.00001C8.69601 2.75 8.36301 2.75 8.00001 2.75C4.09501 2.75 2.93501 5.8 2.61401 7.135C2.53801 7.451 2.77701 7.75 3.10201 7.75H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 10.25C15.185 10.25 14.898 11.25 13.833 11.25C12.954 11.25 12.605 10.5689 11.9112 10.3309"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.4922 7.75H14.898C15.222 7.75 15.462 7.451 15.386 7.135C15.3694 7.0655 15.3505 6.9914 15.3289 6.9133"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8957 13.6098C14.6636 14.1856 13.9386 15.25 11.75 15.25H6.99219"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default BurgerSlash;
