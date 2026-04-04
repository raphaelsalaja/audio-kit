import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ViewPlusSign({
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
          d="M9.49995 14.25C9.49995 13.0093 10.5093 12 11.75 12H12V11.75C12 10.5093 13.0093 9.5 14.25 9.5C15.1989 9.5 16.0084 10.0923 16.3385 10.925C16.4353 10.7744 16.5268 10.6259 16.6078 10.4829C17.1342 9.5547 17.1342 8.4458 16.6083 7.5171C15.5468 5.6436 13.1475 3 8.99995 3C4.85245 3 2.45306 5.6436 1.39206 7.5171C0.865657 8.4458 0.865653 9.5542 1.39155 10.4829C2.45305 12.3564 4.85245 15 8.99995 15C9.21575 15 9.42395 14.9888 9.63035 14.9749C9.55175 14.7461 9.49995 14.5049 9.49995 14.25Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9 12C10.6568 12 12 10.657 12 9C12 7.343 10.6568 6 9 6C7.3432 6 6 7.343 6 9C6 10.657 7.3432 12 9 12Z"
          fill={fill}
        />
        <path
          d="M16.75 13.5H15V11.75C15 11.336 14.664 11 14.25 11C13.836 11 13.5 11.336 13.5 11.75V13.5H11.75C11.336 13.5 11 13.836 11 14.25C11 14.664 11.336 15 11.75 15H13.5V16.75C13.5 17.164 13.836 17.5 14.25 17.5C14.664 17.5 15 17.164 15 16.75V15H16.75C17.164 15 17.5 14.664 17.5 14.25C17.5 13.836 17.164 13.5 16.75 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ViewPlusSign;
