import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardContactless2({
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
          d="M14.25 15.75H3.75C2.645 15.75 1.75 14.855 1.75 13.75V8.75H16.25V13.75C16.25 14.855 15.355 15.75 14.25 15.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M10.7679 3.98199C10.3159 3.52999 9.69094 3.25 8.99994 3.25C8.30994 3.25 7.68493 3.52999 7.23193 3.98199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.536 2.214C11.631 1.309 10.381 0.75 9 0.75C7.619 0.75 6.36899 1.31 5.46399 2.214"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 6.5C9.4142 6.5 9.75 6.164 9.75 5.75C9.75 5.336 9.4142 5 9 5C8.5858 5 8.25 5.336 8.25 5.75C8.25 6.164 8.5858 6.5 9 6.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.1325 4.75H14.25C15.355 4.75 16.25 5.645 16.25 6.75V13.75C16.25 14.855 15.355 15.75 14.25 15.75H3.75C2.645 15.75 1.75 14.855 1.75 13.75V6.75C1.75 5.645 2.645 4.75 3.75 4.75H3.86719"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 8.75H16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 12.75H7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 12.75H13.75"
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

export default CreditCardContactless2;
