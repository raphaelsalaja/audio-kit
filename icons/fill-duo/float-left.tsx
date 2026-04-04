import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FloatLeft({
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
          d="M6.25006 6H3.75006C2.78356 6 2.00006 6.7835 2.00006 7.75V10.25C2.00006 11.2165 2.78356 12 3.75006 12H6.25006C7.21656 12 8.00006 11.2165 8.00006 10.25V7.75C8.00006 6.7835 7.21656 6 6.25006 6Z"
          fill={fill}
        />
        <path
          d="M15.2501 11.5H10.2501C9.83596 11.5 9.50006 11.1641 9.50006 10.75C9.50006 10.3359 9.83596 10 10.2501 10H15.2501C15.6642 10 16.0001 10.3359 16.0001 10.75C16.0001 11.1641 15.6642 11.5 15.2501 11.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.2501 15H2.75006C2.33596 15 2.00006 14.6641 2.00006 14.25C2.00006 13.8359 2.33596 13.5 2.75006 13.5H15.2501C15.6642 13.5 16.0001 13.8359 16.0001 14.25C16.0001 14.6641 15.6642 15 15.2501 15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.2501 8H10.2501C9.83596 8 9.50006 7.6641 9.50006 7.25C9.50006 6.8359 9.83596 6.5 10.2501 6.5H15.2501C15.6642 6.5 16.0001 6.8359 16.0001 7.25C16.0001 7.6641 15.6642 8 15.2501 8Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.2501 4.5H2.75006C2.33596 4.5 2.00006 4.1641 2.00006 3.75C2.00006 3.3359 2.33596 3 2.75006 3H15.2501C15.6642 3 16.0001 3.3359 16.0001 3.75C16.0001 4.1641 15.6642 4.5 15.2501 4.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FloatLeft;
