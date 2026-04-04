import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Trees({
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
          d="m16.5,14h-1.5029c-.4141,0-.75-.3359-.75-.75s.3359-.75.75-.75h.1377l-2.4434-3.8477c-.1475-.2314-.1562-.5239-.0244-.7637s.3838-.3887.6572-.3887h.7891l-2.8633-4.3794-1.6221,2.4814c-.2275.3457-.6934.4438-1.0381.2173-.3467-.2271-.4443-.6919-.2178-1.0386l2.25-3.4414c.2773-.4229.9785-.4229,1.2559,0l4.25,6.5c.1504.2305.1631.5254.0322.7676-.1318.2422-.3848.3931-.6602.3931h-.8105l2.4434,3.8477c.1475.2314.1562.5239.0244.7637s-.3838.3887-.6572.3887Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m12.6328,12.8477l-2.4434-3.8477h.8105c.2754,0,.5283-.1509.6602-.3931.1309-.2422.1182-.5371-.0322-.7676L7.3779,1.3394c-.2773-.4229-.9785-.4229-1.2559,0L1.8721,7.8394c-.1504.2305-.1631.5254-.0322.7676.1318.2422.3848.3931.6602.3931h.8105l-2.4434,3.8477c-.1475.2314-.1562.5239-.0244.7637s.3838.3887.6572.3887h4.5v2.25c0,.4141.3359.75.75.75s.75-.3359.75-.75v-2.25h4.5c.2734,0,.5254-.1489.6572-.3887s.123-.5322-.0244-.7637Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Trees;
