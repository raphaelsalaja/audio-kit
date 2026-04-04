import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Form({
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
          d="M3.75006 3H7.75006C8.16406 3 8.50006 2.664 8.50006 2.25C8.50006 1.836 8.16406 1.5 7.75006 1.5H3.75006C3.33606 1.5 3.00006 1.836 3.00006 2.25C3.00006 2.664 3.33606 3 3.75006 3Z"
          fill={fill}
        />
        <path
          d="M14.2501 4.5H3.75006C2.78356 4.5 2.00006 5.2835 2.00006 6.25V7.75C2.00006 8.7165 2.78356 9.5 3.75006 9.5H14.2501C15.2166 9.5 16.0001 8.7165 16.0001 7.75V6.25C16.0001 5.2835 15.2166 4.5 14.2501 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.2501 11H3.75006C2.78356 11 2.00006 11.7835 2.00006 12.75V14.25C2.00006 15.2165 2.78356 16 3.75006 16H14.2501C15.2166 16 16.0001 15.2165 16.0001 14.25V12.75C16.0001 11.7835 15.2166 11 14.2501 11Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Form;
