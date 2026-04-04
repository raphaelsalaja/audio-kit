import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UnorderedList({
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
          d="M3.75012 7.5C4.99276 7.5 6.00011 6.49264 6.00011 5.25C6.00011 4.00736 4.99276 3 3.75012 3C2.50748 3 1.50012 4.00736 1.50012 5.25C1.50012 6.49264 2.50748 7.5 3.75012 7.5Z"
          fill={fill}
        />
        <path
          d="M3.75012 15C4.99276 15 6.00011 13.9926 6.00011 12.75C6.00011 11.5074 4.99276 10.5 3.75012 10.5C2.50748 10.5 1.50012 11.5074 1.50012 12.75C1.50012 13.9926 2.50748 15 3.75012 15Z"
          fill={fill}
        />
        <path
          d="M16.2501 6H8.75012C8.33612 6 8.00012 5.664 8.00012 5.25C8.00012 4.836 8.33612 4.5 8.75012 4.5H16.2501C16.6641 4.5 17.0001 4.836 17.0001 5.25C17.0001 5.664 16.6641 6 16.2501 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.2501 13.5H8.75012C8.33612 13.5 8.00012 13.164 8.00012 12.75C8.00012 12.336 8.33612 12 8.75012 12H16.2501C16.6641 12 17.0001 12.336 17.0001 12.75C17.0001 13.164 16.6641 13.5 16.2501 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
      </g>
    </svg>
  );
}

export default UnorderedList;
