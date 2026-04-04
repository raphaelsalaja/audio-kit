import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FloatRight({
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
          d="M14.2501 6H11.7501C10.7836 6 10.0001 6.7835 10.0001 7.75V10.25C10.0001 11.2165 10.7836 12 11.7501 12H14.2501C15.2166 12 16.0001 11.2165 16.0001 10.25V7.75C16.0001 6.7835 15.2166 6 14.2501 6Z"
          fill={fill}
        />
        <path
          d="M7.75006 11.5H2.75006C2.33596 11.5 2.00006 11.1641 2.00006 10.75C2.00006 10.3359 2.33596 10 2.75006 10H7.75006C8.16416 10 8.50006 10.3359 8.50006 10.75C8.50006 11.1641 8.16416 11.5 7.75006 11.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.2501 15H2.75006C2.33596 15 2.00006 14.6641 2.00006 14.25C2.00006 13.8359 2.33596 13.5 2.75006 13.5H15.2501C15.6642 13.5 16.0001 13.8359 16.0001 14.25C16.0001 14.6641 15.6642 15 15.2501 15Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.75006 8H2.75006C2.33596 8 2.00006 7.6641 2.00006 7.25C2.00006 6.8359 2.33596 6.5 2.75006 6.5H7.75006C8.16416 6.5 8.50006 6.8359 8.50006 7.25C8.50006 7.6641 8.16416 8 7.75006 8Z"
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

export default FloatRight;
