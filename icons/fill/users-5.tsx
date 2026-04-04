import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users5({
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
          d="M1 15.0005C1 12.7923 2.79179 11.0005 5 11.0005C7.20821 11.0005 9 12.7923 9 15.0005V15.2505C9 16.2167 8.21621 17.0005 7.25 17.0005H2.75C1.78379 17.0005 1 16.2167 1 15.2505V15.0005Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M5 9.50049C6.104 9.50049 7 8.60449 7 7.50049C7 6.39649 6.104 5.50049 5 5.50049C3.896 5.50049 3 6.39649 3 7.50049C3 8.60449 3.896 9.50049 5 9.50049Z"
          fill={secondaryfill}
        />
        <path
          d="M12.5 6.50049C13.8811 6.50049 15 5.3816 15 4.00049C15 2.61938 13.8811 1.50049 12.5 1.50049C11.1189 1.50049 10 2.61938 10 4.00049C10 5.3816 11.1189 6.50049 12.5 6.50049Z"
          fill={fill}
        />
        <path
          d="M9.98893 17.0005L15.25 17.0005C16.2162 17.0005 17 16.2167 17 15.2505V12.5005C17 10.0153 14.9852 8.00049 12.5 8.00049C10.6671 8.00049 9.09015 9.09636 8.38853 10.6686C9.6738 11.6755 10.5 13.2419 10.5 15.0005V15.2505C10.5 15.8948 10.3124 16.4953 9.98893 17.0005Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Users5;
