import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonBiking({
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
          d="M14 16.5C15.6569 16.5 17 15.1569 17 13.5C17 11.8431 15.6569 10.5 14 10.5C12.3431 10.5 11 11.8431 11 13.5C11 15.1569 12.3431 16.5 14 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M4 16.5C5.65685 16.5 7 15.1569 7 13.5C7 11.8431 5.65685 10.5 4 10.5C2.34315 10.5 1 11.8431 1 13.5C1 15.1569 2.34315 16.5 4 16.5Z"
          fill={secondaryfill}
        />
        <path
          d="M10.7496 5.5C11.5781 5.5 12.2496 4.82843 12.2496 4C12.2496 3.17157 11.5781 2.5 10.7496 2.5C9.92121 2.5 9.24963 3.17157 9.24963 4C9.24963 4.82843 9.92121 5.5 10.7496 5.5Z"
          fill={fill}
        />
        <path
          d="M13.4996 7.5H11.3796C11.3186 7.5 11.2586 7.477 11.2136 7.437L9.98463 6.344C9.27563 5.713 8.17463 5.768 7.53263 6.469L6.29363 7.82C5.93263 8.214 5.77263 8.743 5.85463 9.271C5.93763 9.8 6.25063 10.256 6.71563 10.522L8.68663 11.648L8.25863 14.644C8.19963 15.054 8.48463 15.434 8.89463 15.493C8.93063 15.498 8.96663 15.5 9.00163 15.5C9.36863 15.5 9.68963 15.23 9.74263 14.856L10.1956 11.69C10.2656 11.18 10.0236 10.686 9.57763 10.43L8.22463 9.657L9.57563 7.987L10.2176 8.558C10.5376 8.843 10.9506 9 11.3806 9H13.5006C13.9146 9 14.2506 8.664 14.2506 8.25C14.2506 7.836 13.9136 7.5 13.4996 7.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PersonBiking;
