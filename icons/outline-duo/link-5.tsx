import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link5({
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
          d="M4.51901 2.58589L2.587 4.51769C1.806 5.29869 1.806 6.56499 2.587 7.34609L4.35501 9.11419C5.13601 9.89519 6.40299 9.89519 7.18399 9.11419L9.11599 7.18239C9.89699 6.40129 9.89699 5.13499 9.11599 4.35389L7.34698 2.58589C6.56598 1.80479 5.30001 1.80479 4.51901 2.58589Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.818 8.8858L8.88598 10.8177C8.10498 11.5987 8.10498 12.865 8.88598 13.6461L10.654 15.4142C11.435 16.1952 12.702 16.1952 13.483 15.4142L15.415 13.4824C16.196 12.7013 16.196 11.435 15.415 10.6539L13.647 8.8858C12.866 8.1048 11.599 8.1048 10.818 8.8858Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.51901 2.58589L2.587 4.51769C1.806 5.29869 1.806 6.56499 2.587 7.34609L4.35501 9.11419C5.13601 9.89519 6.40299 9.89519 7.18399 9.11419L9.11599 7.18239C9.89699 6.40129 9.89699 5.13499 9.11599 4.35389L7.34698 2.58589C6.56598 1.80479 5.30001 1.80479 4.51901 2.58589Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.818 8.8858L8.88598 10.8177C8.10498 11.5987 8.10498 12.865 8.88598 13.6461L10.654 15.4142C11.435 16.1952 12.702 16.1952 13.483 15.4142L15.415 13.4824C16.196 12.7013 16.196 11.435 15.415 10.6539L13.647 8.8858C12.866 8.1048 11.599 8.1048 10.818 8.8858Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25101 6.25L11.751 11.75"
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

export default Link5;
