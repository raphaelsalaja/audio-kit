import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Airplay({
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
          d="M10.0351 11.239C9.57015 10.551 8.43015 10.551 7.96515 11.239L5.38515 15.05C5.12515 15.434 5.09915 15.927 5.31715 16.337C5.53415 16.747 5.95715 17.001 6.42115 17.001H11.5811C12.0451 17.001 12.4681 16.747 12.6851 16.337C12.9031 15.927 12.8761 15.435 12.6171 15.05L10.0371 11.239H10.0351Z"
          fill={secondaryfill}
        />
        <path
          d="M14.25 14H14.1138C13.6997 14 13.3638 13.6641 13.3638 13.25C13.3638 12.8359 13.6997 12.5 14.1138 12.5H14.25C14.9395 12.5 15.5 11.9395 15.5 11.25V5.25C15.5 4.5605 14.9395 4 14.25 4H3.75C3.0605 4 2.5 4.5605 2.5 5.25V11.25C2.5 11.9395 3.0605 12.5 3.75 12.5H3.8862C4.3003 12.5 4.6362 12.8359 4.6362 13.25C4.6362 13.6641 4.3003 14 3.8862 14H3.75C2.2334 14 1 12.7666 1 11.25V5.25C1 3.7334 2.2334 2.5 3.75 2.5H14.25C15.7666 2.5 17 3.7334 17 5.25V11.25C17 12.7666 15.7666 14 14.25 14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Airplay;
