import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Toggles({
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
          d="M12.7501 8H7.40833C6.99423 8 6.65833 7.6641 6.65833 7.25V2.25C6.65833 1.8359 6.99423 1.5 7.40833 1.5H12.7501C14.5421 1.5 16.0001 2.958 16.0001 4.75C16.0001 6.542 14.5421 8 12.7501 8Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.5909 16.5H5.25011C3.45811 16.5 2.00012 15.042 2.00012 13.25C2.00012 11.458 3.45811 10 5.25011 10H10.5939C10.7931 10 10.9835 10.0791 11.1242 10.2197C11.2649 10.3603 11.3439 10.5512 11.3439 10.7505L11.341 15.7505C11.341 16.1646 11.005 16.5 10.5909 16.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M5.75011 8.5C3.68271 8.5 2.00012 6.8179 2.00012 4.75C2.00012 2.6821 3.68271 1 5.75011 1C7.81751 1 9.50011 2.6821 9.50011 4.75C9.50011 6.8179 7.81751 8.5 5.75011 8.5Z"
          fill={fill}
        />
        <path
          d="M12.2501 17C10.1827 17 8.50012 15.3179 8.50012 13.25C8.50012 11.1821 10.1827 9.5 12.2501 9.5C14.3175 9.5 16.0001 11.1821 16.0001 13.25C16.0001 15.3179 14.3175 17 12.2501 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Toggles;
