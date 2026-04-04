import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Redo({
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
          d="M3 10.75C2.791 10.75 2.58299 10.663 2.43499 10.494C2.16199 10.182 2.19399 9.70804 2.50599 9.43604C3.34399 8.70304 5.654 6.99902 9 6.99902C12.324 6.99902 14.629 8.68601 15.466 9.41101C15.779 9.68201 15.813 10.156 15.542 10.469C15.271 10.781 14.798 10.817 14.484 10.545C13.775 9.93004 11.819 8.49902 9.001 8.49902C6.164 8.49902 4.20499 9.94296 3.49499 10.564C3.35299 10.689 3.17699 10.75 3.00199 10.75H3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.469 11.9721C10.138 11.9721 9.836 11.752 9.745 11.417C9.637 11.017 9.874 10.6051 10.274 10.4981L14.012 9.49002L12.671 5.85806C12.527 5.46906 12.726 5.03805 13.115 4.89505C13.503 4.75005 13.935 4.95002 14.078 5.33902L15.703 9.741C15.776 9.939 15.763 10.158 15.666 10.345C15.569 10.532 15.398 10.67 15.195 10.725L10.665 11.9471C10.6 11.9651 10.534 11.9721 10.469 11.9721Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Redo;
