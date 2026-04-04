import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Compass2({
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
          d="M9 1C4.58179 1 1 4.58168 1 9C1 13.4183 4.58179 17 9 17C13.4182 17 17 13.4183 17 9C17 4.58168 13.4182 1 9 1ZM9 10C9.55229 10 10 9.55229 10 9C10 8.44772 9.55229 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55229 8.44772 10 9 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 1C9.41421 1 9.75 1.33579 9.75 1.75V2.75C9.75 3.16421 9.41421 3.5 9 3.5C8.58579 3.5 8.25 3.16421 8.25 2.75V1.75C8.25 1.33579 8.58579 1 9 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 9C14.5 8.58579 14.8358 8.25 15.25 8.25H16.25C16.6642 8.25 17 8.58579 17 9C17 9.41421 16.6642 9.75 16.25 9.75H15.25C14.8358 9.75 14.5 9.41421 14.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 14.5C9.41421 14.5 9.75 14.8358 9.75 15.25V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V15.25C8.25 14.8358 8.58579 14.5 9 14.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 9C1 8.58579 1.33579 8.25 1.75 8.25H2.75C3.16421 8.25 3.5 8.58579 3.5 9C3.5 9.41421 3.16421 9.75 2.75 9.75H1.75C1.33579 9.75 1 9.41421 1 9Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.9828 5.99144C13.0936 5.7131 13.0282 5.39551 12.8164 5.18367C12.6045 4.97182 12.2869 4.90637 12.0086 5.0172L7.30958 6.8882C7.11812 6.96443 6.96646 7.11609 6.89023 7.30755L5.01923 12.0066C4.9084 12.2849 4.97385 12.6025 5.1857 12.8143C5.39754 13.0262 5.71513 13.0916 5.99347 12.9808L10.6925 11.1098C10.8839 11.0336 11.0356 10.8819 11.1118 10.6904L12.9828 5.99144ZM10 9C10 9.5523 9.552 10 9 10C8.448 10 8 9.5523 8 9C8 8.4477 8.448 8 9 8C9.552 8 10 8.4477 10 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Compass2;
