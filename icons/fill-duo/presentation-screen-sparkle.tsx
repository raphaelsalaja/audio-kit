import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenSparkle({
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
          d="M5.7094 14H7.29054L6.46147 16.4872C6.33049 16.8801 5.90575 17.0925 5.51279 16.9615C5.11983 16.8305 4.90746 16.4058 5.03845 16.0128L5.7094 14Z"
          fill={fill}
        />
        <path
          d="M10.7094 14H12.2905L12.9614 16.0128C13.0924 16.4058 12.8801 16.8305 12.4871 16.9615C12.0941 17.0925 11.6694 16.8801 11.5384 16.4872L10.7094 14Z"
          fill={fill}
        />
        <path
          d="M17.4873 3.03809L15.5928 2.40723L14.9615 0.512695C14.8594 0.206995 14.5728 0 14.2501 0C13.9274 0 13.6407 0.206995 13.5387 0.512695L12.9074 2.40723L11.0129 3.03809C10.7067 3.14059 10.5002 3.4268 10.5002 3.75C10.5002 4.0732 10.7067 4.35941 11.0129 4.46191L12.9074 5.09277L13.5387 6.9873C13.6408 7.293 13.9274 7.5 14.2501 7.5C14.5728 7.5 14.8595 7.293 14.9615 6.9873L15.5928 5.09277L17.4873 4.46191C17.7935 4.35941 18 4.0732 18 3.75C18 3.4268 17.7935 3.14059 17.4873 3.03809Z"
          fill={fill}
        />
        <path
          d="M9.83553 2H3.75C2.23079 2 1 3.23079 1 4.75V11.25C1 12.7692 2.23079 14 3.75 14H14.25C15.7692 14 17 12.7692 17 11.25V6.20517L16.7787 6.27886L16.3846 7.4615C16.0786 8.37868 15.2192 9 14.2501 9C13.2808 9 12.4221 8.37899 12.116 7.46248L11.7216 6.27886L10.5368 5.88433C9.62018 5.5775 9.00024 4.71938 9.00024 3.75C9.00024 3.0557 9.31826 2.41848 9.83553 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default PresentationScreenSparkle;
