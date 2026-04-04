import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PersonDress({
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
          d="M9.00024 4.5C10.2429 4.5 11.2502 3.49264 11.2502 2.25C11.2502 1.00736 10.2429 0 9.00024 0C7.7576 0 6.75024 1.00736 6.75024 2.25C6.75024 3.49264 7.7576 4.5 9.00024 4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M12.0173 6.92079C11.8343 6.25679 11.2773 5.75779 10.5993 5.65279C9.47327 5.47479 8.55401 5.4748 7.42101 5.6508C6.73501 5.7578 6.17301 6.2548 5.99001 6.9198L4.20127 13.4162C4.09727 13.7952 4.17327 14.1922 4.41127 14.5062C4.65027 14.8192 5.01227 14.9992 5.40627 14.9992H6.31027L6.42627 16.3952C6.50227 17.2952 7.26827 17.9992 8.17027 17.9992H9.83027C10.7333 17.9992 11.4993 17.2942 11.5743 16.3952L11.6903 14.9992H12.5933C12.9873 14.9992 13.3493 14.8192 13.5883 14.5062C13.8263 14.1932 13.9033 13.7962 13.7983 13.4172L12.0173 6.92079Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PersonDress;
